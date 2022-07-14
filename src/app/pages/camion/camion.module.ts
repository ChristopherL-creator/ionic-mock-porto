import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeColorByPositionPipe } from 'src/app/pipes/change-color-by-position.pipe';

import { IonicModule } from '@ionic/angular';

import { CamionPageRoutingModule } from './camion-routing.module';

import { CamionPage } from './camion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamionPageRoutingModule,
  ],
  declarations: [
    CamionPage,
    ChangeColorByPositionPipe
  ],
  exports: [ChangeColorByPositionPipe]
})
export class CamionPageModule {}
