import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart_product.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart: CartProduct[] = [];
allPrice=0
  constructor() { }

  ngOnInit(): void {
    const cartSS = sessionStorage.getItem("cart");
    if (cartSS !== null) {
      this.cart = JSON.parse(cartSS);
    }
    this.calculatePrice();
  }

  decreaseQuantity(cartProduct: CartProduct) {
    //cartProduct.quantity = cartProduct.quantity - 1;
    cartProduct.quantity--;
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
    if (cartProduct.quantity <= 0){
      this.removeProduct(cartProduct);
      }
      this.calculatePrice();
  }

  increaseQuantity(cartProduct: CartProduct) {
    cartProduct.quantity++;
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
    this.calculatePrice();
  }

 removeProduct(cartProduct: CartProduct) {
    const index = this.cart.indexOf(cartProduct);
    this.cart.splice(index,1);
  sessionStorage.setItem("cart", JSON.stringify(this.cart));
  this.calculatePrice();
 }
  calculatePrice(){
this.allPrice = 0;
this.cart.forEach(element => this.allPrice = this.allPrice + element.product.price * element.quantity);
  }

  deleteAll() {
    this.cart = [];
    sessionStorage.setItem("cart",JSON.stringify(this.cart));
    this.calculatePrice();
  }
}
