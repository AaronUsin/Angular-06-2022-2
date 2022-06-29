import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InimesedComponent } from './inimesed/inimesed.component';
import { PersonsComponent } from './persons/persons.component';
import { UusInimeneComponent } from './uus-inimene/uus-inimene.component';
import { ValitudComponent } from './valitud/valitud.component';

const routes: Routes = [
  {path:"", redirectTo: "persons", pathMatch:"full"},
  {path:"valitud", component: ValitudComponent},
  {path:"persons", component: PersonsComponent},
  {path:"inimesed", component: InimesedComponent},
  {path:"uus-inimene", component: UusInimeneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
