import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pood',
  templateUrl: './pood.component.html',
  styleUrls: ['./pood.component.css']
})
export class PoodComponent implements OnInit {
antudKeskus: any;
  constructor() { }

  ngOnInit(): void {
    let poeNimi = window.location.href.split("pood/")[1];
    let keskused = [];
    let keskusedLS= localStorage.getItem("keskused");
    if (keskusedLS !== null) {
      keskused = JSON.parse(keskusedLS);
    }
    this.antudKeskus = keskused.find((element: any) => 
    element.nimi.toLowerCase().replaceAll(" ","-") === poeNimi);
  }

}
