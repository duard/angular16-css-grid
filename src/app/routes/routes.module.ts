import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../layout/main/main.component';
import { PoliticaDePrivacidadeComponent } from '../pages/politica-de-privacidade/politica-de-privacidade.component';

import { ArquivoDepositoComponent } from '../pages/arquivo-deposito/arquivo-deposito.component';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },

  { path: 'main', component: MainComponent },
  {
    path: 'home',
    loadChildren: () =>
      import('../pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import(
        '../pages/politica-de-privacidade/politica-de-privacidade.module'
      ).then((m) => m.PoliticaDePrivacidadeModule),
  },
  {
    path: 'arquivo-deposito',
    loadChildren: () =>
      import('../pages/arquivo-deposito/arquivo-deposito.module').then(
        (m) => m.ArquivoDepositoModule
      ),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('../pages/usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
