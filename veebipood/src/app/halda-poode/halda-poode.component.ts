import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-halda-poode',
  templateUrl: './halda-poode.component.html',
  styleUrls: ['./halda-poode.component.css']
})
export class HaldaPoodeComponent implements OnInit {
  keskused: any[] = [];

  constructor() { }

  ngOnInit(): void {
    let keskusedLS = localStorage.getItem("keskused");
    if (keskusedLS !== null) {
      this.keskused = JSON.parse(keskusedLS);
  }
 }
deleteShop(k: any){
  const j2rjekorraNumber = this.keskused.indexOf(k);
  this.keskused.splice(j2rjekorraNumber,1);
  localStorage.setItem("keskused", JSON.stringify(this.keskused));
}
 }


