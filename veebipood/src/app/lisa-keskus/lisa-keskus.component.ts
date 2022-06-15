import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-keskus',
  templateUrl: './lisa-keskus.component.html',
  styleUrls: ['./lisa-keskus.component.css']
})
export class LisaKeskusComponent implements OnInit {
uusKeskus ="";
  constructor() { }

  ngOnInit(): void {
  }

  sisestaKeskus() {
    localStorage.setItem("keskus",this.uusKeskus);
    
   let lsKeskused= localStorage.getItem("keskused");
   let keskused = [];
   if (lsKeskused !== null) {
      keskused = JSON.parse(lsKeskused);
   }

keskused.push(this.uusKeskus);
localStorage.setItem("keskused", JSON.stringify(keskused));
}
}
