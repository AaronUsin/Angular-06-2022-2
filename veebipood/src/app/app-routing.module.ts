import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { PoedComponent } from './poed/poed.component';
import { KodulehtComponent } from './koduleht/koduleht.component';
import { AutodComponent } from './autod/autod.component';
import { ValitudAutodComponent } from './valitud-autod/valitud-autod.component';
import { LisaKeskusComponent } from './lisa-keskus/lisa-keskus.component';
import { YksikToodeComponent } from './yksik-toode/yksik-toode.component';


const routes: Routes = [
  // localhost:4200/  ---> avaleht.component.html sisu 
  //            ja saab kaasa .ts dünaamilisuse jaoks ja .css kujunduse jaoks
  {path:"",component: KodulehtComponent},
  {path:"soendus",component:AvalehtComponent},
  {path:"ostukorv",component:OstukorvComponent},
  {path:"lisa-toode",component:LisaToodeComponent},
  {path:"poed",component:PoedComponent},
  {path:"Autod",component:AutodComponent},
  {path:"valitud-autod",component:ValitudAutodComponent},
  {path:"lisa-keskus",component:LisaKeskusComponent},
  {path:"toode/:nimi",component:YksikToodeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
