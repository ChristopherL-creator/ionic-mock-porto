import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';
import { GruService } from './services/gru/gru.service';
import { Gru } from './model/gru';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public selectedGru: Observable<Gru[]>;

  constructor(
    private translateServ: TranslateService,
    private platform: Platform,
    public gruServ: GruService
    ) {
        this.initializeApp();

      }

  initializeApp(): void{
//  funzione per scegliare lingua di default, richiamo nome json
    this.translateServ.setDefaultLang('it-IT');

//  carico lingua salvata da impostazioni
    this.platform.ready().then(() => {
      this.translateServ.use(localStorage['myConfig']);
    });
    this.selectedGru = this.gruServ.selectedGrus;

    this.selectedGru.subscribe({
      next: currentGru => console.log(currentGru),
      error: err => console.log((err))
      }
    );
  }


}
