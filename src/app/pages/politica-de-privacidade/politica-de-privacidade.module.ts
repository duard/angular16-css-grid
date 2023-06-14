import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade.component';
import { RouterModule } from '@angular/router';
const routes = [
  {
    path: '',
    component: PoliticaDePrivacidadeComponent,
  },
];
@NgModule({
  declarations: [PoliticaDePrivacidadeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  // exports: [PoliticaDePrivacidadeComponent],
})
export class PoliticaDePrivacidadeModule {}
