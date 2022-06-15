import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valitud-autod',
  templateUrl: './valitud-autod.component.html',
  styleUrls: ['./valitud-autod.component.css']
})
export class ValitudAutodComponent implements OnInit {
valitudAutod: string [] = []
  constructor() { }

  ngOnInit(): void {
    let lsValitudAutod = localStorage.getItem("valitud-autod");
    if (lsValitudAutod !== null) {
      this.valitudAutod = JSON.parse(lsValitudAutod);
  }
  }
  valiAuto(autod:string){
    this.valitudAutod.push(autod);
    localStorage.setItem("valitud-autod",JSON.stringify(this.valitudAutod))
    }
    eemaldaListist(autod:string){
      let index = this.valitudAutod.indexOf(autod);//järjekorra numbri leidmiseks
      this.valitudAutod.splice(index, 1);
      localStorage.setItem("valitud-autod",JSON.stringify(this.valitudAutod))
    }
    tyhjenda() {
      this.valitudAutod = [];
      localStorage.setItem("valitud-autod",JSON.stringify(this.valitudAutod))
    }
}
