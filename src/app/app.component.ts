import { Component, SimpleChanges, inject } from '@angular/core';
import { GLOBAL_SIGNAL_SERVICE } from './shared/services/global-signal.service';
import { AppGlobal } from './shared/models/app-global.model';
import { BrowserStorageService } from './shared/services/browser-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titleName = 'Simples';
  isLoading = false;

  globalSignalService = inject(GLOBAL_SIGNAL_SERVICE);

  currentUser = this.globalSignalService.getSignal<AppGlobal>('currentUser');
  appName = this.globalSignalService.getSignal<AppGlobal>('companyName');

  constructor(private browserStorage: BrowserStorageService) {
    console.log(`Buscando dados`);
  }

  ngOnInit(): void {
    if (!this.appName()) {
      this.globalSignalService.setSignal('appName', this.titleName);
      this.browserStorage.setLocal('appName', this.titleName);
      console.log(`SETITNGS`, this.appName());
    }
    if (!this.currentUser()) {
      this.globalSignalService.setSignal('currentUser', {
        id: '0014',
        name: 'Jonas Trocados',
        username: 'jonassilverio',
        email: 'jonassilverio@gmail.com',
      });
      this.browserStorage.setLocal('currentUser', this.currentUser());
    }
  }
  ngDoCheck(): void {
    console.log('ngDoCheck AppComponent');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges AppComponent', changes, this.currentUser());
  }
}
