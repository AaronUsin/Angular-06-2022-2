import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValitudComponent } from './valitud/valitud.component';
import { PersonsComponent } from './persons/persons.component';
import { InimesedComponent } from './inimesed/inimesed.component';
import { UusInimeneComponent } from './uus-inimene/uus-inimene.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuudaInimeneComponent } from './muuda-inimene/muuda-inimene.component';
import { YksikInimeneComponent } from './yksik-inimene/yksik-inimene.component';

@NgModule({
  declarations: [
    AppComponent,
    ValitudComponent,
    PersonsComponent,
    InimesedComponent,
    UusInimeneComponent,
    MuudaInimeneComponent,
    YksikInimeneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}