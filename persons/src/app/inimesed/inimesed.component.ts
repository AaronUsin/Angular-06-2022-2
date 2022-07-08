import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inimesed',
  templateUrl: './inimesed.component.html',
  styleUrls: ['./inimesed.component.css']
})
export class InimesedComponent implements OnInit {
  persons: any[]= [
    // {"id":1, "name":"Leanne Graham","age": 23,"username":"Bret","email":"Sincere@april.biz"},
    // {"id":2, "name":"Erwin Howell","age": 54,"username":"Antonette","email":"Shanna@melissa.tv"},
    // {"id":3, "name":"Clementine Bauch","age": 12,"username":"Samantha","email":"Nathan@yesenia.net"},
    // {"id":4, "name":"Patricia Lebsack","age": 63,"username":"Karianne","email":"Julianne.OConner@kory.org"},
    // {"id":5, "name":"Chelsey Dietrich","age": 95,"username":"Kamren","email":"Lucio_Hettinger@annie.ca"},
    // {"id":6, "name":"Mrs. Dennis Schulist","age": 64,"username":"Leopoldo_Corkery","email":"Karley_Dach@jasper.info"},
    // {"id":7, "name":"Kurtis Weissnat","age": 32,"username":"Elwyn.Skiles","email":"Telly.Hoeger@billy.biz"},
    // {"id":8, "name":"Nicholas Runolfsdottir V","age": 41,"username":"Maxime_Nienow","email":"Sherwood@rosamond.me"},
    // {"id":9, "name":"Glenna Reichert","age": 72,"username":"Delphine","email":"Chaim_McDermott@dana.io"},
    // {"id":10, "name":"Clementina DuBuque","age": 11,"username":"Moriah.Stanton","email":"Rey.Padberg@karina.biz"},
   
  ]
  constructor() { }

  ngOnInit(): void {
    let lsPersons = sessionStorage.getItem("inimesed");
    if (lsPersons !== null){
      this.persons = JSON.parse(lsPersons)};
  }
lisaInimene(person:any){
  this.persons.push(person);
  sessionStorage.setItem("inimesed",JSON.stringify(this.persons))
console.log(this.persons)
}
}

