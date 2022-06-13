import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
ostukorviTooted: string[] = []
  constructor() { }

  ngOnInit(): void {
    let lsOstukorv = localStorage.getItem("ostukorv");
    if (lsOstukorv !== null) {
      this.ostukorviTooted = JSON.parse(lsOstukorv);
  }
  }
lisaOstukorvi(toode:string){
this.ostukorviTooted.push(toode);
localStorage.setItem("ostukorv",JSON.stringify(this.ostukorviTooted))
}
eemaldaOstukorvist(toode:string){
  let index = this.ostukorviTooted.indexOf(toode);//järjekorra numbri leidmiseks
  this.ostukorviTooted.splice(index, 1);
  localStorage.setItem("ostukorv",JSON.stringify(this.ostukorviTooted))
}
tyhjenda() {
    this.ostukorviTooted = [];
    localStorage.setItem("ostukorv",JSON.stringify(this.ostukorviTooted))
  }
//pean leidma toote listi sisese indexi
//järjekorra numbri alusel kustutama ja pean ütlema täpselt mitu tüki kustutama peab


}
