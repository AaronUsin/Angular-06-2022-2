import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'veebipood';
programmiKeel = localStorage.getItem("Keel");
//sõnaline muutuja (jutumärkides) ---string
//numbriline (ilma jutumärkideta numbritest koosnev) --- number
//kahendväärtus (true/false) --- boolean
  valiKeel(uusKeel: string ){
    localStorage.setItem("keel", uusKeel);
this.programmiKeel = uusKeel;
}
}
//Salvestamise võimalused:
//1. andmebaas - väline, internetist
//2. brauserisse saab salvestada - cookies, localstorage
//3.faili - Excel, txt

// Vanakooli meetod:  valiKeelEN(){
//this.programmiKeel = "EN";
//}

//valiKeelRU(){
 // this.programmiKeel = "RU";
 //   }

 //   valiKeelEE(){
  //    this.programmiKeel = "EE";
   //     }
// koht, mis eristab Typescripti Javascriptist on see, et tüübi näitamisel on koolonid.