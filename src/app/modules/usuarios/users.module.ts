import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { UserResolverService } from './users-resolver.service';
import { UsersComponent } from './users.component';
import { UserComponent } from './usuario/user.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: { breadcrumb: 'Users' },
    children: [
      {
        path: ':id',
        component: UserComponent,
        data: { breadcrumb: (data: any) => `${data.user.name}` },
        resolve: { user: UserResolverService },
      },
    ],
  },
];
@NgModule({
  declarations: [UserComponent, UsersComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BreadcrumbModule],
  exports: [RouterModule],
})
export class UsersModule {}
