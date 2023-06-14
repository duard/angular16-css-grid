import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NavComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NavComponent,
  ],
})
export class LayoutModule {}
