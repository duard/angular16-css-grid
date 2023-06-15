import { User } from 'src/app/modules/users/users.model';

export interface AppGlobal {
  currentUser: User;
  companyName: string;
  url: string;
}
