import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooted',
  templateUrl: './tooted.component.html',
  styleUrls: ['./tooted.component.css']
})
export class TootedComponent implements OnInit {
products=[
  {name: "Boots", price: 300, color:"White"},
  {name: "Shirt", price: 100, color:"Black"},
  {name: "Hat", price: 30, color:"Red"},
]
  constructor() { }

  ngOnInit(): void {
  }

}
