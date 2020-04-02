import { Injectable } from '@angular/core';
import { UserDataa } from '../data/user-data';

@Injectable()
export class UserDataService extends UserDataa
{
data = [{
    username: 'admin',
    permission: 'M A C F R S B V ',  
    login: 'login',

  },
  {
    username: 'admin1',
    permission: 'R S B V',  
    login: 'Login',

  }

];

  getData() {
    return this.data;
  }
}