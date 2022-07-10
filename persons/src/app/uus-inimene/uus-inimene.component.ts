import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uus-inimene',
  templateUrl: './uus-inimene.component.html',
  styleUrls: ['./uus-inimene.component.css']
})
export class UusInimeneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
lisaInimene(vorm:any){
let persons = [];
let personsLS = localStorage.getItem("inimesed");
if (personsLS !== null){
  persons = JSON.parse(personsLS);
  
}
persons.push(vorm.value);
localStorage.setItem("inimesed", JSON.stringify(persons));
//console.log(persons)
}
}
