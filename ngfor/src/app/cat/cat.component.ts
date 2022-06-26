import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
catss: any[]=[]
 cats=[
  "Miisu",
 "Kiisu",
  "Liisu",
  "Kiti",
  "Nurr",
]
  constructor() { }

  ngOnInit(): void {
    let catssLS = localStorage.getItem("Cats");
    if (catssLS !== null){
      this.catss = JSON.parse(catssLS);
  }

}
}
