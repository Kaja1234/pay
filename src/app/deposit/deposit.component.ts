import { Component, OnInit } from '@angular/core';
import { Deposit } from '../service/deposit';
import { MoneyPeService } from '../service/moneype.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  deposit:Deposit;

  constructor(private moneypeService:MoneyPeService) { }

  ngOnInit(): void {
  }

  moneyDeposit(deposit:Deposit){

    this.moneypeService.moneyDeposit(deposit);
  }

}
