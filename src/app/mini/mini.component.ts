import { Statement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Mini } from '../service/mini';
import { MoneyPeService } from '../service/moneype.service';


@Component({
  selector: 'app-mini',
  templateUrl: './mini.component.html',
  styleUrls: ['./mini.component.css']
})
export class MiniComponent implements OnInit {

  constructor(private service:MoneyPeService) { }

  ngOnInit(): void {

    this.statement();
  
  }

  statementList:Statement[]= [];

  statement(){


          this.service.statement().subscribe(Mini => this.statementList = Mini );

            console.log(this.statementList);

}
}

