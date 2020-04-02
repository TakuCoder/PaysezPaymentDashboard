import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { TransactionReportComponent } from './transaction-report/transaction-report.component';
import { MerchantReportComponent } from './merchant-report/merchant-report.component';
import { LogReportComponent } from './log-report/log-report.component';

const routes: Routes = [

  {

path:'',
component:ReportsComponent,
children:[
  {
path:"transaction-report",
component:TransactionReportComponent


  },
  {

path:'merchant-report',
component:MerchantReportComponent

  },
  {


path:'log-report',
component:LogReportComponent


  }


]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
