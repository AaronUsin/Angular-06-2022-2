import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { CartProduct } from '../models/cart_product.model';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides: any[] = [
    {src: 'https://static.gibson.com/product-images/Acoustic/ACCL5X202/Ebony/front-banner-1600_900.png', title: '1', subtitle: ''},
    {src: 'https://static.gibson.com/product-images/Custom/CUS118365/Ebony/front-banner-1600_900.png', title: '2', subtitle: ''},
    {src: 'https://static.gibson.com/product-images/USA/USAS7F953/Sixties%20Cherry/front-banner-1600_900.png', title: '3', subtitle: ''}

];
isLoading = false;
  // 1. võtta kõikide toodete küljest kategooria [{},{},{}].map() -- ["","",""]
  // 2. võtta korduvad kategooriad ära["",""]
  // 3. kuvame HTMLs ngFor abil

  kuupaev = new Date();
  protsent = 0.5;
  number = 123123;
  tekst = "elas metsas mutionu";
  
selectedCategory = 'all'
categories: string[]=[];
products: Product[]=[];
private originalProducts: Product[]=[];
private productURLDb = "https://webshop-project-f0a42-default-rtdb.europe-west1.firebasedatabase.app/products.json"

//{id: 1, imgSrc: 'ikm', name: 'hgvfvf', price: 5, description: 'kgvk', …} - see läheks siia sulu sisse lõppu.
  constructor(private _toastService: ToastService, 
    private http: HttpClient,
    private productService: ProductService) { }

  ngOnInit(): void {
    // this.slides[0] = {
    //   id: 0,
    //   src: './assets/img/angular.jpg',
    //   title: 'First slide',
    //   subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    // };
    // this.slides[1] = {
    //   id: 1,
    //   src: './assets/img/react.jpg',
    //   title: 'Second slide',
    //   subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    // }
    // this.slides[2] = {
    //   id: 2,
    //   src: './assets/img/vue.jpg',
    //   title: 'Third slide',
    //   subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    // }
    this.isLoading = true;
    this.http.get<Product[]>(this.productURLDb).subscribe(productsFromDb => {
      this.isLoading = false;
      this.products = productsFromDb;
      this.originalProducts = productsFromDb;
      this. categories = this.products.map(element => element.category);
      this.categories = [... new Set(this.categories)];
      //this.categories = [... new Set(this.products.map(element=> element.category))]
    });
  }
  selectCategory(category: string) {
    if (category === 'all') {
      this.products = this.originalProducts;
      this.selectedCategory = 'all';
    } else {
      this.products = this.originalProducts.filter(element => element.category === category);
      this.selectedCategory = category;
    }
  }

  addToCart(productClicked: Product) {
    //console.log(product);
    let cart: CartProduct[] = [];
    const cartSS = sessionStorage.getItem("cart");
    if (cartSS !== null) {
     cart = JSON.parse(cartSS); //JSON.parse - võetakse asju ära;
    }
    // 1. kontrollin kas toode on ostukorvis olemas (find;findIndex) -- find undefined: {id:"1", name:"s"}/findIndex -1 : 23
    // 2. kui on ostukorvis olemas, suurendan kogust
    // 3. kui ei ole ostukorvis olemas, pushin
    // 4. .push({id:"1", name:"s"})   .push({product:{id:"1",name:"s"}, quantity: 1})
    const index = cart.findIndex(element => element.product.id === productClicked.id);
    if (index >= 0) {
      // suurendan kogust
      cart[index].quantity = cart[index].quantity + 1;
    } else {
      // lisan juurde
      const pmIndex = cart.findIndex(element => element.product.id === 1);
      if(pmIndex >= 0) { 
        cart.splice(cart.length-1, 0, {product: productClicked, quantity: 1});
      } else {
      cart.push({product: productClicked, quantity: 1})
      }
    };
   // cart.push(productClicked); //push lisab lõppu toote juurde,
    sessionStorage.setItem("cart", JSON.stringify(cart));
    this._toastService.info('Edukalt ostukorvi lisatud');
    this.productService.cartChanged.next(true);
  }
  sortAZ() {
    this.products.sort((a,b) => a.name.localeCompare(b.name));
  }

  sortZA() {
    this.products.sort((a,b) => b.name.localeCompare(a.name))
  }

  sortPriceAsc() {
    this.products.sort((a,b) => a.price - b.price);
  }

  sortPriceDesc() {
    this.products.sort((a,b) => b.price - a.price);
  }
}


//Muuda toode SingleProduct järgi, [formGroup]
//Toodete haldamisel otsing [ me ] 240
//Lisa toode eesti keelse järgi, ngForm
//ID kontroll lisamise ja muutmisel kontrollitakse, kas kellelgi on sama ID
//Avalehele kategooriad - vajutuad kategooria peale, näitab ainult selle kategooria tooteid
//Ostukorvi kujundus
//Ostukorv - kogustega
//Kategooriate valimine Dropdown menüüst, kui lisan või muudan
//Kategooriad ka andmebaasi - võimaldame kategooriaid lisada, vaadata, kustutada

//Kaardirakenduse - võimaldaks vaadata meie poode Eesti kaardil (nagu G Maps - Leaflet)
//Omniva pakiautomaadid kasutusele
//E-maili saatmine - tagasiside / tellimus on tehtud
//Number Navbari

// 70 ak/h / 4  17.5

//Nortali proovitöö e-mailile

//Iseseisev projekt

//
//Piltide üleslaadimine Firebase keskkonda
//Karusell-galerii kasutuselevõtt

//Nortali proovitöö Google Drive's -> emailile

// Iseseisva projekt ideed:
// 1. Mõne kodutöö edasiarendus
// 2. Webshop edasiarendus
// 3. Projekt internetist -> Udemy'st/Youtube'st
// 4. Ise väljamõeldud projekt - WRC app, Muusik koduleht, 

// 01.08 9.00 - 12.15 Nortali proovitööd
// 15.08 9.00 - 10.30 Projekti esitlemine