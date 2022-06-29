import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uus-inimene',
  templateUrl: './uus-inimene.component.html',
  styleUrls: ['./uus-inimene.component.css']
})
export class UusInimeneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
lisaInimene(vorm:any){
console.log(vorm.email)
}
}
