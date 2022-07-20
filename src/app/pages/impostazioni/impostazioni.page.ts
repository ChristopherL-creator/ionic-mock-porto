import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language-service/language-service';


@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.page.html',
  styleUrls: ['./impostazioni.page.scss'],
})
export class ImpostazioniPage implements OnInit {

  language: string = this.translateServ.currentLang;

  constructor(private translateServ: TranslateService, private langServ: LanguageService) { }

  ngOnInit() {
  }

  languageChange(){
    this.langServ.languageChange(this.language);
  }
}
