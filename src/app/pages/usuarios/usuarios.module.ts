import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { RouterModule, Routes } from '@angular/router';
import { UserResolverService } from 'src/app/modules/users/user-resolver.service';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    data: { breadcrumb: 'Users' },
    children: [
      {
        path: ':id',
        component: UsuarioComponent,
        data: { breadcrumb: (data: any) => `${data.user.name}` },
        resolve: { user: UserResolverService },
      },
    ],
  },
];
@NgModule({
  declarations: [UsuariosComponent, UsuarioComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BreadcrumbModule],
  exports: [RouterModule],
})
export class UsuariosModule {}
