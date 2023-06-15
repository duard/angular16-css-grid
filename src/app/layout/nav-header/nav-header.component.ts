import { Component, SimpleChanges, inject } from '@angular/core';
import { BrowserStorageService } from 'src/app/core/services/browser-storage.service';
import { GLOBAL_SIGNAL_SERVICE } from 'src/app/core/services/global-signal.service';
import { AppGlobal } from 'src/app/shared/models/app-global.model';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent {
  globalSignalService = inject(GLOBAL_SIGNAL_SERVICE);
  currentUser = this.globalSignalService.getSignal<AppGlobal>('currentUser');
  appName = this.globalSignalService.getSignal<AppGlobal>('appName');
  constructor(private browserStorage: BrowserStorageService) {}

  ngOnInit(): void {
    this.globalSignalService.setSignal(
      'appName',
      this.browserStorage.getLocal('appName')
    );
    this.globalSignalService.setSignal(
      'currentUser',
      this.browserStorage.getLocal('currentUser')
    );
  }

  ngDoCheck(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  clickMenu() {}
}
