import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GruSelectPage } from './gru-select.page';

const routes: Routes = [
  {
    path: '',
    component: GruSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GruSelectPageRoutingModule {}
