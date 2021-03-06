import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //console.log("Läksin lisa toode lehele")
  }

  sisestaToode(lisamisevorm: any) {
    //localStorage.setItem("toode",this.uusToode);
    
   let lsTooted= localStorage.getItem("tooted");
   let tooted = [];
   if (lsTooted !== null) {
      tooted = JSON.parse(lsTooted);
   }
   // selle lõigu lõpuks on tooted muutuja sees KAS:
   //[] --->kui ei ole midagi localStorages
   //või
   //["coca-cola","Fanta","Sprite"]--->võetakse localstorage-st
   tooted.push(lisamisevorm.value);
   localStorage.setItem("tooted", JSON.stringify(tooted));
  }
  //pannakse localstorage'sse
  //1.pean võtma localStoragest tooted ---> localstorage.getItem
  //2. Pean tegema uue tühja massivi ----> let muutuja on ( = ) tühi massiiv([ ])
  //3.Kui tooted on olemas, siis asendan selle tühja massiivi nende toodetega ( if )
  //4.pean võtma jutumärgid ära (JSON parse)
  //5.Pean lisama uue toote juurde
  //6.Pean panema jutumärgid tagasi
  //7.lisan localStoragesse
  //!== - tähendab ei võrdu
}
