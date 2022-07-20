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
//  funzione per scegliare lingua di default, richiamo nome json
    this.translateServ.setDefaultLang('it-IT');

//  carico lingua salvata da impostazioni
    this.platform.ready().then(() => {
      this.translateServ.use(localStorage['myConfig']);
    });
  }
}
