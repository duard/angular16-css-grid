import { Component, SimpleChanges, inject } from '@angular/core';
import { AppGlobal } from 'src/app/shared/models/app-global.model';
import { GLOBAL_SIGNAL_SERVICE } from 'src/app/shared/services/global-signal.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent {
  globalSignalService = inject(GLOBAL_SIGNAL_SERVICE);
  currentUser = this.globalSignalService.getSignal<AppGlobal>('currentUser');
  appName = this.globalSignalService.getSignal<AppGlobal>('companyName');
  constructor() {}

  ngOnInit(): void {}
  ngDoCheck(): void {
    console.log('ngDoCheck NavHeaderComponent');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges NavHeaderComponent', changes, this.currentUser());
  }
  clickMenu() {
    console.log(`clicou no menuzinho`);

    this.globalSignalService.setSignal('companyName', 'Simples');
    this.globalSignalService.setSignal('currentUser', {
      id: '0014',
      name: 'Jonas Trocados',
      username: 'jonassilverio',
      email: 'jonassilverio@gmail.com',
    });
    console.log(`current User`, this.currentUser());
  }
}
