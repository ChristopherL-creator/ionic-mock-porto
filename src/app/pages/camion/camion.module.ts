import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeColorByPositionPipe } from 'src/app/pipes/change-color-by-distance/change-color-by-position.pipe';
import { AddEastOvestPipe } from 'src/app/pipes/add-east-ovest/add-east-ovest.pipe';
import { PositivePositionPipe } from 'src/app/pipes/positive-position/positive-position.pipe';

import { IonicModule } from '@ionic/angular';

import { CamionPageRoutingModule } from './camion-routing.module';

import { CamionPage } from './camion.page';
import { CamionsPerZoneDirective } from 'src/app/directives/camions-per-zone/camions-per-zone.directive';

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
    PositivePositionPipe,
    CamionsPerZoneDirective
  ],
  exports: [
    ChangeColorByPositionPipe,
    AddEastOvestPipe,
    PositivePositionPipe,
    CamionsPerZoneDirective
  ]
})
export class CamionPageModule {}
