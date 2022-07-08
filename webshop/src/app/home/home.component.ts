import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products: any[]=[];
private productURLDb = "https://webshop-project-f0a42-default-rtdb.europe-west1.firebasedatabase.app/products.json"

//{id: 1, imgSrc: 'ikm', name: 'hgvfvf', price: 5, description: 'kgvk', …} - see läheks siia sulu sisse lõppu.
  constructor(private _toastService: ToastService, 
    private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.productURLDb).subscribe(productsFromDb => this.products = productsFromDb);
  }

  addToCart(product: any) {
    //console.log(product);
    let cart = [];
    const cartSS = sessionStorage.getItem("cart");
    if (cartSS !== null) {
     cart = JSON.parse(cartSS); //JSON.parse - võetakse asju ära;
    }
    cart.push(product); //push lisab lõppu toote juurde,
    sessionStorage.setItem("cart", JSON.stringify(cart));
    this._toastService.info('Edukalt ostukorvi lisatud');
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
//Lisa toode eesti keelse järgi, ngForm
//ID kontroll lisamise ja muutmisel kontrollitakse, kas kellelgi on sama ID
//Toodete haldamisel otsing [ me ] 240
//Avalehele kategooriad - vajutuad kategooria peale, näitab ainult selle kategooria tooteid
//Kategooriate valimine Dropdown menüüst, kui lisan või muudan
//Kategooriad ka andmebaasi - võimaldame kategooriaid lisada, vaadata, kustutada
//Kaardirakenduse - võimaldaks vaadata meie poode Eesti kaardil (nagu G Maps - Leaflet)
//Ostukorv - kogustega
//Omniva pakiautomaadid kasutusele
//Ostukorvi kujundus
//E-maili saatmine - tagasiside / tellimus on tehtud
//Number Navbari

//Nortali proovitöö e-mailile

//Iseseisev projekt

//
//Piltide üleslaadimine Firebase keskkonda
//Karusell-galerii kasutuselevõtt