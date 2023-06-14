import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent {
  user: User | undefined;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => (this.user = data['user']));
  }
}
