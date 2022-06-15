import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autod',
  templateUrl: './autod.component.html',
  styleUrls: ['./autod.component.css']
})
export class AutodComponent implements OnInit {
autod=["BMW","Mercedes","Tesla","Audi","Opel","Volkswagen","Ford","Volvo"];
lisa(auto: any){
this.autod.push(auto);
}
  constructor() { }

  ngOnInit(): void {
    let lsAutod=localStorage.getItem("autod");
    if(lsAutod !== null) {
      this.autod = JSON.parse(lsAutod);
    }
  }

  valiAuto(autod: string){
    let lsValitudAutod = localStorage.getItem("valitud-autod");
    let valitudAutod = [];
    if (lsValitudAutod !== null) {
      valitudAutod = JSON.parse(lsValitudAutod);
  }
  valitudAutod.push(autod);
  localStorage.setItem("valitud-autod", JSON.stringify(valitudAutod));
  }
}
