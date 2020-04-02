import { Component, OnInit } from '@angular/core';
import { NbDateService } from '@nebular/theme';

@Component({
  selector: 'ngx-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.scss']
})
export class AddMerchantComponent {

  min: Date;
  max: Date;
 

  constructor(protected dateService: NbDateService<Date>) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }

}
