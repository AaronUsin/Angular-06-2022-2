import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'harjutused';

  n2itaKollast = false;
  n2itaRohelist = false;
  n2itaSinist = false;
  n2itaPunast = false;
  
  onKlikkimisel() {
    this.n2itaKollast = !this.n2itaKollast;
    console.log(this.n2itaKollast);
  }
  onHiiregaPealeMinekul(){
    this.n2itaRohelist = true;
    console.log(this.n2itaRohelist);
  }
  onHiirega2raMinekul(){
    this.n2itaRohelist = false;
    console.log(this.n2itaRohelist);
  }
  hiiregaV2ljaKl6psates(){
    this.n2itaPunast = true;
    console.log(this.n2itaPunast);
    setInterval(()=> {
    this.n2itaPunast = false;
    console.log(this.n2itaPunast);
    },2000);
  }
  klaviatuurilVajutades(){
    window.alert("Vajutasid klaviatuuril");
  }
  s6naline="Tere";
  numbriline=1234
  
  muudaS6nalineV22rtus() {
    this.s6naline = "Tere tulemast!";
   }
   muudaNumbrilineV22rtus() {
    this.numbriline = this.numbriline *2;
   }
}
