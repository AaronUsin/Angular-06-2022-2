import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muuda-poode',
  templateUrl: './muuda-poode.component.html',
  styleUrls: ['./muuda-poode.component.css']
})
export class MuudaPoodeComponent implements OnInit {
antudKeskus: any;
worm: any;
private j2rjekorraNumber = -1;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let poeNimi = window.location.href.split("muudaP/")[1];
    let keskused = [];
    let keskusedLS= localStorage.getItem("keskused");
    if (keskusedLS !== null) {
      keskused = JSON.parse(keskusedLS);
  }
  this.antudKeskus = keskused.find((element: any) => 
  element.nimi.toLowerCase().replaceAll(" ","-") === poeNimi);
  this.j2rjekorraNumber = keskused.indexOf(this.antudKeskus);
  this.worm = new FormGroup({
  nimi: new FormControl(this.antudKeskus.nimi),
  telefon: new FormControl(this.antudKeskus.telefon),
  aadress: new FormControl(this.antudKeskus.aadress),
   });
}
muudaPood(){
  let keskusedLS= localStorage.getItem("keskused");
  let keskused = [];
  if (keskusedLS !== null) {
     keskused = JSON.parse(keskusedLS);
}
keskused[this.j2rjekorraNumber] = this.worm.value;
localStorage.setItem("keskused", JSON.stringify(keskused));
this.router.navigateByUrl("/halda-poode");
}
}
