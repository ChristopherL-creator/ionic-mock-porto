import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';
import { GruService } from './services/gru/gru.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private translateServ: TranslateService,
    private platform: Platform,
    public gruServ: GruService
    ) {
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
