import { Component, OnInit } from '@angular/core';
import { Electric } from '../service/electric';
import { MoneyPeService } from '../service/moneype.service';

@Component({
  selector: 'app-ebill',
  templateUrl: './ebill.component.html',
  styleUrls: ['./ebill.component.css']
})
export class EbillComponent implements OnInit {

  electric:Electric;

  constructor(private moneypeService:MoneyPeService) { }

  ngOnInit(): void {
  }

  electricBill(electric:Electric){

    this.moneypeService.electricBill(electric);
  }

}
