import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GruSelectPageRoutingModule } from './gru-select-routing.module';

import { GruSelectPage } from './gru-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GruSelectPageRoutingModule
  ],
  declarations: [GruSelectPage]
})
export class GruSelectPageModule {}
