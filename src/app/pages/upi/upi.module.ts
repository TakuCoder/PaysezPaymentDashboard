import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UPIRoutingModule } from './upi-routing.module';
import { UPIComponent } from '../upi/upi.component';
import { MerchantRegisterComponent } from './merchant-register/merchant-register.component';

@NgModule({
  declarations: [UPIComponent, MerchantRegisterComponent],
  imports: [
    CommonModule,
    UPIRoutingModule
  ]
})
export class UPIModule { }
