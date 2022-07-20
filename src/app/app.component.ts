import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private translateServ: TranslateService, private platform: Platform) {
    this.initializeApp();
  }

  initializeApp(){
//  funzione per estrarre lingua da json creati
    this.translateServ.setDefaultLang('it-IT');

    this.platform.ready().then(() => {
      this.translateServ.use(localStorage['myConfig']);
    });
  }
}
