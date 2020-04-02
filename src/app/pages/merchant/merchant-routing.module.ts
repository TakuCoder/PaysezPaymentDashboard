import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {MerchantComponent } from './merchant.component'
import {NotFoundComponent} from './not-found/not-found.component'

import {AddMerchantComponent} from './add-merchant/add-merchant.component'
import { MerchantListComponent } from './merchant-list/merchant-list.component';
import { TerminalListComponent } from './terminal-list/terminal-list.component';
import { TerminalStatusComponent } from './terminal-status/terminal-status.component';
import { MerchantStatusComponent } from './merchant-status/merchant-status.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = 
[
  {
    path: '',
    component: MerchantComponent,
    children: [

      {

        path:'add-merchant',    
        component: AddMerchantComponent,
      },
      {
        path: '404',
        component: NotFoundComponent,
      },

      {
        path: 'merchant-list',
        component: MerchantListComponent,
      },
     

      {
        path: 'terminal-list',
        component: TerminalListComponent,
      },


      {
        path: 'terminal-status',
        component: TerminalStatusComponent,
      },
      {
        path: 'merchant-status',
        component: MerchantStatusComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
