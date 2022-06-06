import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit { //klassi lahtimineku loogeline sulg
s6naline="51412"; //toodete nimi, kategooria pilt, isikutel postiindeks, nimi, isikukood, tel nr/
numbriline=1312312;//toote hinnad, kogused, inimestel laste arv/
kahendV22rtus=true;//tõde või väär ja kolmandat varianti ei ole. Toode on aktiivne, toode on laos, isik on täisealine, rangelt üks või teine.


constructor() { }

  ngOnInit(): void {
    console.log("Läksin avalehe lehele")
  }

  muudaS6nalineV22rtus() {
   this.s6naline = "Uus nimi";
  }
  muudaS6nalineV22rtusOriginaali() {
    this.s6naline = "Tagasi nimi";
   }
  //tavalised sulud näitavad et on funktsioon, loogelised sulud näitavad selle funktsiooni sisu
  muudaNumbrilineV22rtus() {
    this.numbriline = 123433;
   }
   muudaNumbrilineV22rtusOriginaali() {
    this.numbriline = 3123;
   }
   muudaKahendV22rtus() {
    this.kahendV22rtus = false;
   }
   muudaKahendV22rtusOriginaali() {
    this.kahendV22rtus = true;
   }
   aktiivsusMuutus() { //funktsiooni lahtimineku loogeline sulg
    this.kahendV22rtus = !this.kahendV22rtus;
   } //funktsiooni kinnimineku loogeline sulg
   korrutaNumberKahega() {
    this.numbriline = this.numbriline * 2;
   }

   muudaK6ik(){
     this.kahendV22rtus = true;
     this.numbriline = this.numbriline + 3112312;
     this.s6naline = "Jutumärkide sees oleva uue väärtuse";
   }
}//klassi kinnimineku loogeline sulg

//salvestus
//1.andmebaas - pilveteenusesse
//2.brauseri vahemälu - chrome/firefox/edge
//3.fail - logid

// tumesinine - selle klassiga seotud asjad
// helesinine- muutujad,
// kollane - funktsioon

// muutujate väärtused:
//oranž - sõnaline
//roheline - numbriline
//tumesinine - kahendväärtus

//hüüumärk näitab vastandväärtust