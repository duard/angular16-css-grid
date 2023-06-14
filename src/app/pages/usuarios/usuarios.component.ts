import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/modules/users/user.model';

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
