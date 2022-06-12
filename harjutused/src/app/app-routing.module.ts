import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { UusComponent } from './uus/uus.component';

const routes: Routes = [
  {path:"",component: AvalehtComponent},
  {path:"Uus",component: UusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
