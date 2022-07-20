import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translateServ: TranslateService) { this.initializeApp(); }

  initializeApp(){
//  funzione per estrarre lingua da json creati
    this.translateServ.setDefaultLang('it-IT');
  }
}
