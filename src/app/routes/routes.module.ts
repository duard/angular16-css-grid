import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../layout/main/main.component';
import { FeatureGuard } from '../core/guards/feature.guard';

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
    canLoad: [FeatureGuard],
    data: {
      feature: 'privacy-policy',
    },
  },
  {
    path: 'arquivo-deposito',
    loadChildren: () =>
      import('../modules/arquivo-deposito/arquivo-deposito.module').then(
        (m) => m.ArquivoDepositoModule
      ),
    canLoad: [FeatureGuard],

    data: {
      feature: 'arquivo-deposito',
    },
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('../modules/users/users.module').then((m) => m.UsersModule),
    canLoad: [FeatureGuard],
    data: {
      feature: 'usuarios',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
