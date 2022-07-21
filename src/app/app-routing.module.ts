import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gru-select',
    pathMatch: 'full'
  },
  {
    path: 'camion',
    loadChildren: () => import('./pages/camion/camion.module')
    .then( m => m.CamionPageModule)
  },
  {
    path: 'impostazioni',
    loadChildren: () => import('./pages/impostazioni/impostazioni.module')
    .then( m => m.ImpostazioniPageModule)
  },
  {
    path: 'gru-select',
    loadChildren: () => import('./pages/gru-select/gru-select.module')
    .then( m => m.GruSelectPageModule)
  },
  {
    path: 'gru-select/:id',
    loadChildren: () => import('./pages/camion/camion.module')
    .then( m => m.CamionPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
