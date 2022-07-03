import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart: any[] = [];
allPrice=0
  constructor() { }

  ngOnInit(): void {
    const cartSS = sessionStorage.getItem("cart");
    if (cartSS !== null) {
      this.cart = JSON.parse(cartSS);
    }
    this.calculatePrice();
  }
  calculatePrice(){
this.allPrice = 0;
this.cart.forEach(element => this.allPrice = this.allPrice + element.price);
  }

  deleteAll() {
    this.cart = [];
    localStorage.setItem("cart",JSON.stringify(this.cart));
    this.calculatePrice();
  }
}
