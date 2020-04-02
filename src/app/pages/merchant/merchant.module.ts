import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';




import { MerchantRoutingModule } from './merchant-routing.module';
import { MerchantComponent } from './merchant.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemeModule } from '../../@theme/theme.module';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import { AddMerchantComponent } from './add-merchant/add-merchant.component';
import { MerchantListComponent } from './merchant-list/merchant-list.component';
import { TerminalListComponent } from './terminal-list/terminal-list.component';
import { MerchantStatusComponent } from './merchant-status/merchant-status.component';
import { TerminalStatusComponent } from './terminal-status/terminal-status.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [MerchantComponent, NotFoundComponent, AddMerchantComponent, MerchantListComponent, TerminalListComponent, MerchantStatusComponent, TerminalStatusComponent, UsersComponent],
  imports: [
    ThemeModule,
    CommonModule,
    MerchantRoutingModule,
    NbTreeGridModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbIconModule,

    
  ]
})
export class MerchantModule { }
