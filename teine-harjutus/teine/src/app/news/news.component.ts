import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
uudis = "Juhtus selline asi ...";
uudiseSisu = "See on uudise sisu";
onInglisekeelne = false;
onSoomekeelne = false;
ollakseHiiregaT2rniPeal = false;
  constructor() { }

  ngOnInit(): void {
  }

  hiiregaYleMinnes(){
    this.ollakseHiiregaT2rniPeal = true;
  }

  hiirega2raMinnes(){
    this.ollakseHiiregaT2rniPeal = false;
  }

  muudaIngliseKeelseks(){
    this.uudis = "This thing happened...";
    this.uudiseSisu = "This is the content of the news";
    this.onInglisekeelne = true;
    this.onSoomekeelne = false;
  }
  muudaSoomeKeelseks(){
    this.uudis = "Tämä tapahtui ..."
    this.uudiseSisu = "Tämä on uutisen sisältö"
    this.onInglisekeelne = false;
    this.onSoomekeelne = true;
  }
  muudaEestiKeelseks(){
    this.uudis = "Juhtus selline asi ...";
    this.uudiseSisu = "See on uudise sisu";
    this.onInglisekeelne = false;
    this.onSoomekeelne = false;
  }
}
