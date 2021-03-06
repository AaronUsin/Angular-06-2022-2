import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'persons';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ee');
    translate.use('ee');
  }
}
