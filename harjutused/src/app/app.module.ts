import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UusComponent } from './uus/uus.component';
import { AvalehtComponent } from './avaleht/avaleht.component';

@NgModule({
  declarations: [
    AppComponent,
    UusComponent,
    AvalehtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
