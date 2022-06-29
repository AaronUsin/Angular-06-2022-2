import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValitudComponent } from './valitud/valitud.component';
import { PersonsComponent } from './persons/persons.component';
import { InimesedComponent } from './inimesed/inimesed.component';

@NgModule({
  declarations: [
    AppComponent,
    ValitudComponent,
    PersonsComponent,
    InimesedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
