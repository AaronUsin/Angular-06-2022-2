import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  lisaKassid (form: any) {
    let cats = [];
    let catsLS = localStorage.getItem("Cats");
    if (catsLS !== null){
      cats = JSON.parse(catsLS);
    }
    cats.push(form.value);
  localStorage.setItem("Cats", JSON.stringify(cats));
  }
}
