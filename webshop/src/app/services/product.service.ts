import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productDbUrl = "https://webshop-project-f0a42-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  constructor(private http: HttpClient) { }
getProductsFromDb(newProducts: product[]){
  return this.http.get<Product[]>(this.productDbUrl);
}

}
