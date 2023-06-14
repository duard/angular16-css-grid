import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UsuariosComponent {
  users: User[] = [];

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
      .subscribe((users) => (this.users = users));
  }
}
