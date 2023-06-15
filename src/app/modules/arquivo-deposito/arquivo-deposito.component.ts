import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-arquivo-deposito',
  templateUrl: './arquivo-deposito.component.html',
  styleUrls: ['./arquivo-deposito.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArquivoDepositoComponent {
  colors = [
    'blue',
    'aquamarine',
    'yellow',
    'DarkOrchid',
    'GreenYellow',
    'DeepPink',
  ];
}
