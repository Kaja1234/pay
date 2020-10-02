import { Component, OnInit } from '@angular/core';
import { Kyc } from '../service/kyc';
import { MoneyPeService } from '../service/moneype.service';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.css']
})
export class KycComponent implements OnInit {

  kyc:Kyc

  constructor(private moneypeService:MoneyPeService) { }

  ngOnInit(): void {
  }

  userKyc(kyc:Kyc){
    this.moneypeService.userKyc(kyc);
  }

}
