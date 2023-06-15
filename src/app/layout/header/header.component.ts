import { Component, SimpleChanges, computed, inject } from '@angular/core';
import { User } from 'src/app/modules/usuarios/users.model';
import { AppGlobal } from 'src/app/shared/models/app-global.model';
import { GLOBAL_SIGNAL_SERVICE } from 'src/app/shared/services/global-signal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  globalSignalService = inject(GLOBAL_SIGNAL_SERVICE);
  currentUser = this.globalSignalService.getSignal<User>('currentUser');
  // fullName = computed(() => {
  //   console.log('signal name change');
  //   return `${this.firstName()} ${this.lastName()}`;
  // });
  currentWindow =
    this.globalSignalService.getSignal<AppGlobal>('currentWindow');
  appName = this.globalSignalService.getSignal<AppGlobal>('companyName');

  constructor() {}

  ngOnInit(): void {}
  ngDoCheck(): void {
    console.log(
      'ngDoCheck HeaderComponent',
      this.currentUser(),
      '\n ngDoCheck =>',
      this.currentUser['name']
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'ngDoCheck HeaderComponent',
      this.currentUser(),
      '\nngOnChanges =>',
      'teste'
    );
  }
  changeUser() {
    this.globalSignalService.setSignal('currentUser', {
      name: 'Jonas Iconado',
    });
  }
}
