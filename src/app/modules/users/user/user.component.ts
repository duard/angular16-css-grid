import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../users.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user: User | undefined;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => (this.user = data['user']));
  }
}
