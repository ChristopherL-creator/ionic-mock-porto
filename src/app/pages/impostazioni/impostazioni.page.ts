import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.page.html',
  styleUrls: ['./impostazioni.page.scss'],
})
export class ImpostazioniPage implements OnInit {

  language: string = this.translateServ.currentLang;

  constructor(private translateServ: TranslateService) { }

  ngOnInit() {
  }

  languageChange() {
    this.translateServ.use(this.language);
  }

}
