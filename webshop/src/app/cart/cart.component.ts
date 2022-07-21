import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart_product.model';
import { ParcelMachineService } from '../services/parcel-machine.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart: CartProduct[] = [];
allPrice=0
parcelMachines: any = [];

  constructor(private parcelMachineService: ParcelMachineService) { }

  ngOnInit(): void {
    this.parcelMachineService.getParcelMachines().subscribe(parcelMachines => {
      this.parcelMachines = parcelMachines.filter(element => element.A0_NAME === "EE");
    })

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
