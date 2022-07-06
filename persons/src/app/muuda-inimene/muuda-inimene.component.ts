import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muuda-inimene',
  templateUrl: './muuda-inimene.component.html',
  styleUrls: ['./muuda-inimene.component.css']
})
export class MuudaInimeneComponent implements OnInit {
lisatudInimesed: any;
vorm: any;
private j2rjekorraNumber = -1;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let inimeseNimi = window.location.href.split("person/:name")[1];
    let inimesed = [];
    let lsInimesed= sessionStorage.getItem("persons");
    if (lsInimesed !== null) {
      inimesed = JSON.parse(lsInimesed);
    }
    this.lisatudInimesed = inimesed.find((element: any) => 
    element.nimi.toLowerCase().replaceAll(" ","-") === inimeseNimi);
    this.j2rjekorraNumber = inimesed.indexOf(this.lisatudInimesed);
    this.vorm = new FormGroup({
    nimi: new FormControl(this.lisatudInimesed.nimi),
    vanus: new FormControl(this.lisatudInimesed.vanus),
     });
  }

  muuda(){
    console.log("töötab");
    //1.võtan localStoragest
    let inimesed = [];
    let lsInimesed= sessionStorage.getItem("persons");
    if (lsInimesed !== null) {
      inimesed = JSON.parse(lsInimesed);
    }
  //2.teen midagi ---
  // lisamiseks tooted.push(uus_väärtus),
  //kustutamiseks tooted.splice(index,mitu_tk)
  //muutmiseks tooted[index]=uus_väärtus
  
  
  inimesed[this.j2rjekorraNumber] = this.vorm.value;
  
  //3.panen tagasi localStoragesse
  sessionStorage.setItem("persons", JSON.stringify(inimesed));
  //4.suunan
  this.router.navigateByUrl("/inimesed");
  }

}
