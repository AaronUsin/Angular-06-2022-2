import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
cats: any[]=[]
koguvanus = 0
// cats=[
//  "Miisu",
// "Kiisu",
//  "Liisu",
//  "Kiti",
//  "Nurr",
//]
  constructor() { }

  ngOnInit(): void {
    let catsLS = localStorage.getItem("Cats");
    if (catsLS !== null){
      this.cats = JSON.parse(catsLS);
  }
  this.arvutaKoguvanus();
}
eemaldaKass(cat:any){
  let index = this.cats.indexOf(cat);
  this.cats.splice(index, 1);
  localStorage.setItem("Cats",JSON.stringify(this.cats));
  this.arvutaKoguvanus();
}
tyhjendaList() {
  this.cats = [];
  localStorage.setItem("Cats",JSON.stringify(this.cats));
  this.arvutaKoguvanus();
}

arvutaKoguvanus(){
  this.koguvanus = 0;
  this.cats.forEach(element => this.koguvanus = this.koguvanus + element.vanus);
}
}
