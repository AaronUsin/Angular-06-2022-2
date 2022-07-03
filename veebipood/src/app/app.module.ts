import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { PoedComponent } from './poed/poed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KodulehtComponent } from './koduleht/koduleht.component';
import { AutodComponent } from './autod/autod.component';
import { ValitudAutodComponent } from './valitud-autod/valitud-autod.component';
import { LisaKeskusComponent } from './lisa-keskus/lisa-keskus.component';
import { YksikToodeComponent } from './yksik-toode/yksik-toode.component';
import { MuudaToodeComponent } from './muuda-toode/muuda-toode.component';
import { HaldaTooteidComponent } from './halda-tooteid/halda-tooteid.component';
import { HaldaPoodeComponent } from './halda-poode/halda-poode.component';
import { PoodComponent } from './pood/pood.component';
import { MuudaPoodeComponent } from './muuda-poode/muuda-poode.component';

@NgModule({
  declarations: [
    AppComponent,
    AvalehtComponent,
    OstukorvComponent,
    LisaToodeComponent,
    PoedComponent,
    KodulehtComponent,
    AutodComponent,
    ValitudAutodComponent,
    LisaKeskusComponent,
    YksikToodeComponent,
    MuudaToodeComponent,
    HaldaTooteidComponent,
    HaldaPoodeComponent,
    PoodComponent,
    MuudaPoodeComponent,
  ],
  imports: [
    BrowserModule, //*ngIf="true" ,*ngfor="let toode of tooted"
    AppRoutingModule, // routerLink="/", <router-outlet>
    FormsModule, //#vorm="ngForm", [(ngModel)]=""
    ReactiveFormsModule // [formGroup]=vorm    formControlName="nimi"
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
