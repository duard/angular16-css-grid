import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArquivoDepositoComponent } from './arquivo-deposito.component';
import { BoxModule } from 'src/app/components/box/box.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: ArquivoDepositoComponent,
  },
];
@NgModule({
  declarations: [ArquivoDepositoComponent],
  exports: [ArquivoDepositoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BoxModule],
})
export class ArquivoDepositoModule {}
