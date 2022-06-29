import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

persons: any[]=[]

  constructor() { }

  ngOnInit(): void {
   
    let lsPersons = sessionStorage.getItem("Inimesed");
    if (lsPersons !== null){
      this.persons = JSON.parse(lsPersons);
    }
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
}
