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
    let inimeseNimi = window.location.href.split("muuda-inimene/")[1];
    console.log(inimeseNimi)
    let persons = [];
    let lsPersons= localStorage.getItem("inimesed");
    if (lsPersons !== null) {
      persons = JSON.parse(lsPersons);
    }
    console.log(persons)
    this.lisatudInimesed = persons.find((element: any) => 
    element.name.toLowerCase().replaceAll(" ","-") === inimeseNimi);
    this.j2rjekorraNumber = persons.indexOf(this.lisatudInimesed);
    this.vorm = new FormGroup({
      name: new FormControl(this.lisatudInimesed.name),
      
      age: new FormControl(this.lisatudInimesed.age),
     });
  }

  muuda(){
    console.log("töötab");
    //1.võtan localStoragest
    let persons = [];
    let lsPersons= localStorage.getItem("inimesed");
    if (lsPersons !== null) {
      persons = JSON.parse(lsPersons);
    }
  //2.teen midagi ---
  // lisamiseks tooted.push(uus_väärtus),
  //kustutamiseks tooted.splice(index,mitu_tk)
  //muutmiseks tooted[index]=uus_väärtus
  
  
  persons[this.j2rjekorraNumber] = this.vorm.value;
  
  //3.panen tagasi localStoragesse
  localStorage.setItem("inimesed", JSON.stringify(persons));
  //4.suunan
  this.router.navigateByUrl("/inimesed");
  }

}
