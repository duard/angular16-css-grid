import { Component, SimpleChanges, inject } from '@angular/core';
import { GLOBAL_SIGNAL_SERVICE } from './shared/services/global-signal.service';
import { Settings } from './shared/models/settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading = false;

  globalSignalService = inject(GLOBAL_SIGNAL_SERVICE);

  currentUser = this.globalSignalService.getSignal<Settings>('currentUser');
  appName = this.globalSignalService.getSignal<Settings>('companyName');
  ngOnInit(): void {}
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes, this.currentUser());
  }
}
