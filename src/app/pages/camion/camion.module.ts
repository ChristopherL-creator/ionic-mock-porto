import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeColorByPositionPipe } from 'src/app/pipes/change-color-by-distance/change-color-by-position.pipe';
import { AddEastOvestPipe } from 'src/app/pipes/add-east-ovest/add-east-ovest.pipe';
import { PositivePositionPipe } from 'src/app/pipes/positive-position/positive-position.pipe';

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
    ChangeColorByPositionPipe,
    AddEastOvestPipe,
    PositivePositionPipe
  ],
  exports: [
    ChangeColorByPositionPipe,
    AddEastOvestPipe,
    PositivePositionPipe
  ]
})
export class CamionPageModule {}
