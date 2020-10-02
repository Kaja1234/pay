import { Component, OnInit } from '@angular/core';
import { Mobile } from '../service/mobile';
import { MoneyPeService } from '../service/moneype.service';

@Component({
  selector: 'app-mobilerecharge',
  templateUrl: './mobilerecharge.component.html',
  styleUrls: ['./mobilerecharge.component.css']
})
export class MobilerechargeComponent implements OnInit {

  mobile:Mobile;

  constructor(private moneypeService:MoneyPeService) { }

  ngOnInit(): void {
  }

  mobileRecharge(mobile:Mobile){

    this.moneypeService.mobileRecharge(mobile);
  }

}
