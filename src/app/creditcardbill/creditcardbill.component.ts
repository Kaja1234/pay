import { Component, OnInit } from '@angular/core';
import { Credit } from '../service/credit';
import { MoneyPeService } from '../service/moneype.service';

@Component({
  selector: 'app-creditcardbill',
  templateUrl: './creditcardbill.component.html',
  styleUrls: ['./creditcardbill.component.css']
})
export class CreditcardbillComponent implements OnInit {
  
  credit:Credit;

  constructor(private moneypeService:MoneyPeService) { }

  ngOnInit(): void {
  }

  creditBill(credit:Credit){
   
    this.moneypeService.creditBill(credit);
  }

}
