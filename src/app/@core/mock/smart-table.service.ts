import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData 
{

  data = [{
    id: 'E01010000000001',
    name: 'IserveU ',  
    email: 'Test@gmail.com',
    currency: 'USD',
    status: 'Active',
  },
  {
    id: 'E01010000001392',
    name: 'Lalitha Poultry Trading',  
    email: 'Subbu.popuri@gmail.com',
    currency: 'INR',
    status: 'Active',
  },
  {
    id: 'E01030000000000',
    name: 'Prem Ballabh  ',  
    email: 'venkatsaran59@gmail.com',
    currency: 'USD',
    status: 'Active',
  },
  {
    id: 'E01010000000001',
    name: 'AM2PM  ',  
    email: 'venkatsaran59@gmail.com',
    currency: 'USD',
    status: 'Active',
  }



];

  getData() {
    return this.data;
  }
}
