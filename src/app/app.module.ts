import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routes/routes.module';
import { NavFooterComponent } from './sharesd/layout/nav-footer/nav-footer.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent, NavFooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
