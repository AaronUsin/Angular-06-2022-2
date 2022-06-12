import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uus',
  templateUrl: './uus.component.html',
  styleUrls: ['./uus.component.css']
})
export class UusComponent implements OnInit {
asjad=["maja","auto","paat","lennuk","jalgratas","mootorratas","käru","vanker","jalatsid","pluus"]

constructor() { }

  ngOnInit(): void {
    console.log("Läksin uuele lehele")
  }

}
