import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartChanged = new BehaviorSubject(true);
  private productDbUrl = "https://webshop-project-f0a42-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  constructor(private http: HttpClient) { }
getProductsFromDb(){
  return this.http.get<Product[]>(this.productDbUrl);
}

saveProductsToDb(newProducts: Product[]) {
 return this.http.put(this.productDbUrl, newProducts);
}
}
