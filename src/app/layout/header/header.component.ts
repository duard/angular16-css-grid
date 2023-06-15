import { Component, SimpleChanges, computed, inject } from '@angular/core';
import { GLOBAL_SIGNAL_SERVICE } from 'src/app/core/services/global-signal.service';
import { User } from 'src/app/modules/users/users.model';
import { AppGlobal } from 'src/app/shared/models/app-global.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  globalSignalService = inject(GLOBAL_SIGNAL_SERVICE);
  currentUser = this.globalSignalService.getSignal<User>('currentUser');

  currentWindow =
    this.globalSignalService.getSignal<AppGlobal>('currentWindow');
  appName = this.globalSignalService.getSignal<AppGlobal>('companyName');

  constructor() {}

  ngOnInit(): void {}
  ngDoCheck(): void {}
  ngOnChanges(changes: SimpleChanges): void {}
  changeUser() {
    this.globalSignalService.setSignal('currentUser', {
      name: 'Jonas Iconado',
    });
  }
}
