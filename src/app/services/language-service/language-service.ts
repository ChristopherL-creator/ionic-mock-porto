import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translateServ: TranslateService) { }

  languageChange(language: string){
    this.translateServ.use(language);
//  per salvare configuarazione
    localStorage.setItem('myConfig', language);
// per ricaricare app
    window.location.reload();
  }
}
