import { User } from 'src/app/modules/usuarios/users.model';

export interface AppGlobal {
  currentUser: User;
  companyName: string;
  url: string;
}
