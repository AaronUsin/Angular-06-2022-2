import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poed',
  templateUrl: './poed.component.html',
  styleUrls: ['./poed.component.css']
})
export class PoedComponent implements OnInit {
v2ljakuvatavKontakt: any;
keskused = [
  {nimi:'Kristiine', tel:'+37258643212', aadress:'Tammsaare tee'},
{nimi:'Helsinki',tel:'+358765323121',aadress:'Helsinkinkatu'},
{nimi:'Tasku',tel:'+37257463212',aadress:'Riia mnt'},
{nimi:'Ülemiste',tel:'+37257463512',aadress:'Tartu mnt'}];
  constructor() { }

  ngOnInit(): void {
   // let lsKeskused=localStorage.getItem("keskused");
    //if(lsKeskused !== null) {
     // this.keskused = JSON.parse(lsKeskused);
    }
  

  v6taYhendust (keskus: any) {
this.v2ljakuvatavKontakt = keskus;
  }
}
