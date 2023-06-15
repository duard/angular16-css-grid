import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module';
import { BrowserStorageService } from './shared/services/browser-storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [BrowserStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
