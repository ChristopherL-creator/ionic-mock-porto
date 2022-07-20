import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: string = this.translateServ.currentLang;

  constructor( private translateServ: TranslateService) { }

  languageChange(language: string){
    console.log(language);
    this.translateServ.use(language);
    localStorage.setItem('myConfig', language);
    window.location.reload();
  }
}
