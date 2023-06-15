import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../layout/main/main.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },

  { path: 'main', component: MainComponent },
  {
    path: 'home',
    loadChildren: () =>
      import('../modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import(
        '../modules/politica-de-privacidade/politica-de-privacidade.module'
      ).then((m) => m.PoliticaDePrivacidadeModule),
  },
  {
    path: 'arquivo-deposito',
    loadChildren: () =>
      import('../modules/arquivo-deposito/arquivo-deposito.module').then(
        (m) => m.ArquivoDepositoModule
      ),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('../modules/usuarios/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
