import { mergeNsAndName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-valitud',
  templateUrl: './valitud.component.html',
  styleUrls: ['./valitud.component.css']
})
export class ValitudComponent implements OnInit {
valitudInimesed: any[] = []
koguvanus=0
keskminevanus=0
inimesteArv=0

  constructor() { }

  ngOnInit(): void {
    let lsValitud = localStorage.getItem("valitud");
    if (lsValitud !== null) {
      this.valitudInimesed = JSON.parse(lsValitud);
  }
  this.arvutaKoguvanus();
  this.arvutaKeskminevanus;
  this.arvutaInimestearv;
  
}
lisaValituks(person:any){
  this.valitudInimesed.push(person);
  localStorage.setItem("valitud",JSON.stringify(this.valitudInimesed));
  this.arvutaKoguvanus();
  this.arvutaKeskminevanus;
  this.arvutaInimestearv(person);
}
eemaldaValitutest(person:any){
  let index = this.valitudInimesed.indexOf(person);
  this.valitudInimesed.splice(index, 1);
  localStorage.setItem("valitud",JSON.stringify(this.valitudInimesed));
  this.arvutaKoguvanus();
  this.arvutaKeskminevanus;
  this.arvutaInimestearv(person);
}
tyhjendaList() {
  this.valitudInimesed = [];
  localStorage.setItem("valitud",JSON.stringify(this.valitudInimesed));
  this.arvutaKoguvanus();
  this.arvutaKeskminevanus;
  this.arvutaInimestearv;
}
arvutaKoguvanus(){
  this.koguvanus=0;
  this.valitudInimesed.forEach(element => this.koguvanus = this.koguvanus + element.age);
  }
arvutaKeskminevanus(person:any){
  this.keskminevanus=0
  this.valitudInimesed.forEach(element => this.keskminevanus = this.koguvanus/this.inimesteArv);
 
}
arvutaInimestearv(person:any){
let inimesteArv = count(person.id)
}
}
