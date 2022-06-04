import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';

const routes: Routes = [
  // localhost:4200/  ---> avaleht.component.html sisu 
  //            ja saab kaasa .ts dünaamilisuse jaoks ja .css kujunduse jaoks
  {path:"",component:AvalehtComponent},
  {path:"ostukorv",component:OstukorvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
