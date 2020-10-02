import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Money } from '../service/money';
import { MoneyPeService } from '../service/moneype.service';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {

 money:Money;

 myform:FormGroup;

 constructor(private moneypeService:MoneyPeService) { }

  ngOnInit(): void {

   }
  moneyTransfer(money:Money){
    this.moneypeService.moneyTransfer(money);
  }

  
}

 


    