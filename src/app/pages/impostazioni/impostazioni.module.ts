import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImpostazioniPageRoutingModule } from './impostazioni-routing.module';

import { ImpostazioniPage } from './impostazioni.page';
import {  HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/languages/', '.json');
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImpostazioniPageRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
          useFactory:
            createTranslateLoader,
            deps: [HttpClient]
      }
    })
  ],
  declarations: [ImpostazioniPage]
})
export class ImpostazioniPageModule {}
