import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { RouterModule } from '@angular/router';
const routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
  exports: [HomeComponent],
})
export class HomeModule {}
