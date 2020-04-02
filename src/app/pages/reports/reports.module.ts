import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { TransactionReportComponent } from './transaction-report/transaction-report.component';
import { MerchantReportComponent } from './merchant-report/merchant-report.component';
import { LogReportComponent } from './log-report/log-report.component';



import {NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
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
@NgModule({
  declarations: [ReportsComponent, TransactionReportComponent, MerchantReportComponent, LogReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,NbTreeGridModule,ThemeModule,  NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
  ]
})
export class ReportsModule { }
