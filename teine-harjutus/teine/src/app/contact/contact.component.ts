import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
aadress = "Aadress: Nurme 32 Tallinn 10322";
telefoniNumber = "Telefon: 57439312";
email = "Email: aaron.usin@gmail.com"
onInglisekeelne = false;
  constructor() { }

  ngOnInit(): void {
  }
muudaIngliseKeelseks() {
  this.aadress = "Address: Nurme 32 Tallinn 10322"
  this.telefoniNumber = "Phone nr: 57439312";
  this.email = "Email: aaron.usin@gmail.com"
  this.onInglisekeelne = true;
}
}
