import { Component, SimpleChanges, inject } from '@angular/core';
import { GLOBAL_SIGNAL_SERVICE } from './shared/services/global-signal.service';
import { AppGlobal } from './shared/models/app-global.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading = false;

  globalSignalService = inject(GLOBAL_SIGNAL_SERVICE);

  currentUser = this.globalSignalService.getSignal<AppGlobal>('currentUser');
  appName = this.globalSignalService.getSignal<AppGlobal>('companyName');
  ngOnInit(): void {}
  ngDoCheck(): void {
    console.log('ngDoCheck AppComponent');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges AppComponent', changes, this.currentUser());
  }
}
