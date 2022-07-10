import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InimesedComponent } from './inimesed/inimesed.component';
import { MuudaInimeneComponent } from './muuda-inimene/muuda-inimene.component';
import { PersonsComponent } from './persons/persons.component';
import { UusInimeneComponent } from './uus-inimene/uus-inimene.component';
import { ValitudComponent } from './valitud/valitud.component';
import { YksikInimeneComponent } from './yksik-inimene/yksik-inimene.component';

const routes: Routes = [
  {path:"", redirectTo: "persons", pathMatch:"full"},
  {path:"valitud", component: ValitudComponent},
  {path:"persons", component: PersonsComponent},
  {path:"inimesed", component: InimesedComponent},
  {path:"uus-inimene", component: UusInimeneComponent},
  {path:"muuda-inimene/:nimi", component: MuudaInimeneComponent},
  {path:"yksik-inimene/:nimi", component: YksikInimeneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
