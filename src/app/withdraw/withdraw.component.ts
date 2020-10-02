import { Component, OnInit } from '@angular/core';
import { MoneyPeService } from '../service/moneype.service';
import { Withdraw } from '../service/withdraw';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {


  withdraw:Withdraw;

  constructor(private moneypeService:MoneyPeService) { }

  ngOnInit(): void {
  }

  moneyWithdraw(withdraw:Withdraw){

    this.moneypeService.moneyWithdraw(withdraw);
  }

}
