import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { ValitudComponent } from './valitud/valitud.component';

const routes: Routes = [
  {path:"", redirectTo: "persons", pathMatch:"full"},
  {path:"valitud", component: ValitudComponent},
  {path:"persons", component: PersonsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
