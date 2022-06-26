import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {
mice=[
  {name: "Muisu", age: 2, home: "Viljandi", children: 2, owner: "Jüri"},
  {name: "Masa", age: 1, home: "Narva", children: 4, owner: "Jevgeni"},
  {name: "Taksa", age: 5, home: "Tartu", children: 3, owner: "Jaan"},
]
  constructor() { }

  ngOnInit(): void {
  }

}
