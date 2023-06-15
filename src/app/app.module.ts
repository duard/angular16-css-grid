import { APP_INITIALIZER, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module';
import { BrowserStorageService } from './core/services/browser-storage.service';
import { FeatureFlagsService } from './core/services/feature-flag.service';
import { FeatureFlagDirectiveModule } from './core/directives/feature-flags/feature-directive.module';

const featureFactory = (featureFlagsService: FeatureFlagsService) => () =>
  featureFlagsService.loadConfig();

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    FeatureFlagDirectiveModule,
  ],
  providers: [
    provideClientHydration(),

    BrowserStorageService,
    {
      provide: APP_INITIALIZER,
      useFactory: featureFactory,
      deps: [FeatureFlagsService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
