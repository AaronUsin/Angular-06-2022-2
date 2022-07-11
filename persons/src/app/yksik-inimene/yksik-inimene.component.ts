import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yksik-inimene',
  templateUrl: './yksik-inimene.component.html',
  styleUrls: ['./yksik-inimene.component.css']
})
export class YksikInimeneComponent implements OnInit {

  lisatudInimesed: any;
  constructor() { }

  ngOnInit(): void {
    let inimeseNimi = window.location.href.split("inimene/")[1];
    console.log(inimeseNimi)
    let persons = [];
    let lsPersons= localStorage.getItem("inimesed");
    if (lsPersons !== null) {
      persons = JSON.parse(lsPersons);
    }
    console.log(persons)
    this.lisatudInimesed = persons.find((element: any) => 
    element.name.toLowerCase().replaceAll(" ","-") === inimeseNimi);
  }

}
