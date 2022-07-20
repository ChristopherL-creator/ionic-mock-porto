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

  languageChange(language: string){
    console.log(language);
    this.translateServ.use(language);
    localStorage.setItem('myConfig', language);
    window.location.reload();
  }



}
