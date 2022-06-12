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
  }

}
