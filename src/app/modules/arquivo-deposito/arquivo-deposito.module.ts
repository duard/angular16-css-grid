import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArquivoDepositoComponent } from './arquivo-deposito.component';
import { RouterModule } from '@angular/router';
import { BoxModule } from 'src/app/shared/components/box/box.module';

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
