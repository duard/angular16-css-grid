import { Component, SimpleChanges, inject } from '@angular/core';
import { Settings } from 'src/app/shared/models/settings.model';
import { GLOBAL_SIGNAL_SERVICE } from 'src/app/shared/services/global-signal.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent {
  globalSignalService = inject(GLOBAL_SIGNAL_SERVICE);
  currentUser = this.globalSignalService.getSignal<Settings>('currentUser');
  appName = this.globalSignalService.getSignal<Settings>('companyName');
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
  }
}
