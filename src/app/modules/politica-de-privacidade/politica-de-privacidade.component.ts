import {
  Component,
  SimpleChanges,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { AppGlobal } from 'src/app/shared/models/app-global.model';
import { GLOBAL_SIGNAL_SERVICE } from 'src/app/shared/services/global-signal.service';

@Component({
  selector: 'app-politica-de-privacidade',
  templateUrl: './politica-de-privacidade.component.html',
  styleUrls: ['./politica-de-privacidade.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PoliticaDePrivacidadeComponent {
  globalSignalService = inject(GLOBAL_SIGNAL_SERVICE);
  currentUser = this.globalSignalService.getSignal<AppGlobal>('currentUser');
  appName = this.globalSignalService.getSignal<AppGlobal>('companyName');
  constructor() {}

  ngOnInit(): void {}
  ngDoCheck(): void {
    console.log('ngDoCheck PoliticaDePrivacidadeComponent');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'ngOnChanges PoliticaDePrivacidadeComponent',
      changes,
      this.currentUser()
    );
  }
  clickMenu() {
    console.log(`clicou no menuzinho`);
    this.globalSignalService.setSignal('companyName', 'Simples');
  }
}
