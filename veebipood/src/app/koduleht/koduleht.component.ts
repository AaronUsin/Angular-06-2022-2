import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-koduleht',
  templateUrl: './koduleht.component.html',
  styleUrls: ['./koduleht.component.css']
})
export class KodulehtComponent implements OnInit {
viimatiLisatudToode = localStorage.getItem("toode"); //HTML-is kuvamiseks
tooted: any []=[];//HTML-is kuvamiseks
  constructor() { }

  ngOnInit(): void { //kui lehele tullakse siis pannakse see funktsioon käima
   let lsTooted=localStorage.getItem("tooted");
   if(lsTooted !== null) {
     this.tooted = JSON.parse(lsTooted);
   }
  }

  //{nimi:"da",hind: 3}
lisaOstukorvi(toode: any){
  
  let ostukorv = []; //ma ei kuva seda HTML-is välja, seega on let ees
  //ls lsOstukorv = null
  let lsOstukorv = localStorage.getItem("ostukorv");
  //kui on tühjus siis siia blokki ei lähe
  //kui ei ole tühjus (localstorage's on midagi pandud), siis sobib
  if (lsOstukorv !== null) {
    ostukorv = JSON.parse(lsOstukorv);
}
//[].push({nimi:"da",hind: 3})--> [{nimi:"da",hind: 3}]
ostukorv.push(toode);
//key         |      value
//ostukorv    |    "{nimi:"da",hind: 3}"
localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
}
}
