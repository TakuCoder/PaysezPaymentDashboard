import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UPIComponent } from './upi.component';
import { MerchantRegisterComponent } from './merchant-register/merchant-register.component';

const routes: Routes = [

{
path:'',
component:UPIComponent,


children:[
  {
path:'merchant-register',
component:MerchantRegisterComponent

  }
]


}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UPIRoutingModule { }
