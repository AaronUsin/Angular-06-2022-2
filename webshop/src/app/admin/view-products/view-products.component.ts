import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  products: any[] = [];
  private originalProducts: any[] = [];
  private productURLDb = "https://webshop-project-f0a42-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  searchedProduct: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.productURLDb).subscribe(productsFromDb => {
      this.products = productsFromDb;
      this.originalProducts = productsFromDb;
    });
  }

  searchProducts(){
    console.log("töötab");
    console.log(this.searchedProduct);
    //filterdan kõik tooted, mida mul vaja läheb
    //.filter(elemenr => true) [{1},{2},...,{240}] -> [{1},{2}] filterdab koguaeg vähemaks, 
    //et seda vältida tegime uue paralleelse massiivi
    this.products=this.originalProducts.filter(element => 
      element.name.toLowerCase().indexOf(this.searchedProduct.toLowerCase()) >= 0 ||
      element.id.toString().indexOf(this.searchedProduct.toLowerCase()) >= 0 ||
      element.description.toLowerCase().indexOf(this.searchedProduct.toLowerCase()) >= 0
    );
  }

  deleteProduct(product: any){
    //otsin üles j.k numbri
    const index = this.products.indexOf(product);
    console.log(index)
    //kustutan products muutujast
    this.products.splice(index,1);
    //asendan ära kõik tooted andmebaasis PUT abil
    this.http.put(this.productURLDb, this.products).subscribe();
  };
}
