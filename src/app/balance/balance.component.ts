import { Statement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Deposit } from '../service/deposit';
import { MoneyPeService } from '../service/moneype.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor(private service:MoneyPeService) { }

  ngOnInit(): void {

    this.statement1();
  }

  statementList:Statement[]= [];

  statement1(){


          this.service.statement1().subscribe(Deposit => this.statementList = Deposit );

            console.log(this.statementList);

}

}
