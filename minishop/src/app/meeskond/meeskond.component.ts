import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeskond',
  templateUrl: './meeskond.component.html',
  styleUrls: ['./meeskond.component.css']
})
export class MeeskondComponent implements OnInit {

  member12 = ["Tõnu","Kaarel","Pille","Joonas"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
