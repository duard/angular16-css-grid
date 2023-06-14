import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './routes/routes.module';
import { HomeModule } from './pages/home/home.module';
import { FormsModule } from '@angular/forms';
import { ButtonDirective } from './directives/button.directive';
import { ArquivoDepositoModule } from './pages/arquivo-deposito/arquivo-deposito.module';
import { BoxModule } from './components/box/box.module';
import { LayoutModule } from './layout/layout.module';
import { PoliticaDePrivacidadeModule } from './pages/politica-de-privacidade/politica-de-privacidade.module';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { BreadcrumbModule } from './components/breadcrumb/breadcrumb.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ButtonDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    BreadcrumbModule,
    HomeModule,
    UsuariosModule,
    ArquivoDepositoModule,
    PoliticaDePrivacidadeModule,
    BoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
