import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
 inimesteArv = 0
persons: any[]=[
  {"id":1, "name":"Leanne Graham","age": 23,"username":"Bret","email":"Sincere@april.biz"},
  {"id":2, "name":"Erwin Howell","age": 54,"username":"Antonette","email":"Shanna@melissa.tv"},
  {"id":3, "name":"Clementine Bauch","age": 12,"username":"Samantha","email":"Nathan@yesenia.net"},
  {"id":4, "name":"Patricia Lebsack","age": 63,"username":"Karianne","email":"Julianne.OConner@kory.org"},
  {"id":5, "name":"Chelsey Dietrich","age": 95,"username":"Kamren","email":"Lucio_Hettinger@annie.ca"},
  {"id":6, "name":"Mrs. Dennis Schulist","age": 64,"username":"Leopoldo_Corkery","email":"Karley_Dach@jasper.info"},
  {"id":7, "name":"Kurtis Weissnat","age": 32,"username":"Elwyn.Skiles","email":"Telly.Hoeger@billy.biz"},
  {"id":8, "name":"Nicholas Runolfsdottir V","age": 41,"username":"Maxime_Nienow","email":"Sherwood@rosamond.me"},
  {"id":9, "name":"Glenna Reichert","age": 72,"username":"Delphine","email":"Chaim_McDermott@dana.io"},
  {"id":10, "name":"Clementina DuBuque","age": 11,"username":"Moriah.Stanton","email":"Rey.Padberg@karina.biz"},
 
]

  constructor() { }

  ngOnInit(): void {
    this.arvutaInimestearv();
  }

  lisaValituks(person:any){
let valitud = [];
let lsValitud = localStorage.getItem("valitud");
if (lsValitud !== null) {
  valitud = JSON.parse(lsValitud);
  }
  valitud.push(person);
  localStorage.setItem("valitud", JSON.stringify(valitud));
}
arvutaInimestearv(){
 
  this.inimesteArv = this.persons.length;
  console.log(this.persons.length)
}
}