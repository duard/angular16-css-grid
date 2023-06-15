import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NavHeaderComponent } from './nav-header/nav-header.component';
import { MaterialModule } from '../shared/material.module';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { FeatureFlagDirectiveModule } from '../core/directives/feature-flags/feature-directive.module';

@NgModule({
  declarations: [
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NavComponent,
    NavHeaderComponent,
    NavFooterComponent,
  ],

  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FeatureFlagDirectiveModule,
  ],
  exports: [
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NavComponent,
    NavHeaderComponent,
  ],
})
export class LayoutModule {}
