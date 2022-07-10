import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yksik-inimene',
  templateUrl: './yksik-inimene.component.html',
  styleUrls: ['./yksik-inimene.component.css']
})
export class YksikInimeneComponent implements OnInit {
leitudInimene: any;
  constructor() { }

  ngOnInit(): void {
    let inimeseNimi = window.location.href.split("inimene/")[1];
      console.log(inimeseNimi)
    let lsPersons= localStorage.getItem("inimesed");
    let persons = [];
    if (lsPersons !== null) {
       persons = JSON.parse(lsPersons);
       console.log(inimeseNimi)
    }
    this.leitudInimene = persons.find((element: any) => {
    element.nimi.toLowerCase().replaceAll(" ","-") === inimeseNimi});
    console.log(inimeseNimi)
  }

}
