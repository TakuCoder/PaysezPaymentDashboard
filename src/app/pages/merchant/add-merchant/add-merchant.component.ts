import { Component, OnInit } from '@angular/core';
import { NbDateService } from '@nebular/theme';
import { NgModule } from '@angular/core';

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
@Component({
  selector: 'ngx-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.scss']
})

@NgModule
(
  {
  declarations: [Component],
  imports: [
    NbChatModule,
    NbDatepickerModule,
    NbDialogModule,
    NbMenuModule,
    NbSidebarModule,
    NbToastrModule,
    NbWindowModule,
  ],
  bootstrap: [Component],
})
export class AddMerchantComponent {

  min: Date;
  max: Date;
 

  constructor(protected dateService: NbDateService<Date>) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }

}
