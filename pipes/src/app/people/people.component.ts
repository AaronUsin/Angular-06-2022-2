import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people = [
    {name: "Malle", age: 1962, countrycode:'EE'},
    {name: "Gustav", age: 1932, countrycode:'SE'},
    {name: "Robert", age: 1992, countrycode:'GB'},
    {name: "Anna", age: 1987, countrycode:'RU'},
    {name: "Matti", age: 1978, countrycode:'FI'},
    {name: "Dirk", age: 1998, countrycode:'DE'},
    {name: "Toomas", age: 1950, countrycode:'EE'},
    {name: "Thomas", age: 1966, countrycode:'GB'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
