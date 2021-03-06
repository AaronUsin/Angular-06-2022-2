import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { CartProduct } from '../models/cart_product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
cartSum = 0;
cart: CartProduct[] = [];

  constructor(private translate: TranslateService,
    private produductService: ProductService) {
    const langLS = localStorage.getItem("language");
    if (langLS) {
      translate.use(langLS);
    } else {
      translate.use('ee');
    }
  }
ngOnInit(): void {
  this.produductService.cartChanged.subscribe(() => {
  this.calculatePrice();
})
  }
  calculatePrice(){
    const cartSS = sessionStorage.getItem("cart");
    if (cartSS !== null) {
      this.cart = JSON.parse(cartSS);
    this.cartSum = 0;
    this.cart.forEach(element => this.cartSum = this.cartSum + element.product.price * element.quantity);
    
      }
  }  

    changeLanguage(language: string){
      this.translate.use(language);
      localStorage.setItem("language",language);
    }


  
 // translate.setDefaultLang('en');
   // translate.use('en');
  
  // changeLanguageEN(){
  //   this.translate.use('en');
  //   localStorage.setItem("language",'en');
  // }
  // changeLanguageEE(){
  //   this.translate.use('ee');
  //   localStorage.setItem("language",'ee');
  // }
  // changeLanguageRU(){
  //   this.translate.use('ru');
  //   localStorage.setItem("language",'ru');
  // }
}
