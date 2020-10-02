import { Component, OnInit } from '@angular/core';
import { Insurance } from '../service/insurance';
import { MoneyPeService } from '../service/moneype.service';

@Component({
  selector: 'app-lic',
  templateUrl: './lic.component.html',
  styleUrls: ['./lic.component.css']
})
export class LicComponent implements OnInit {

  insurance:Insurance;

  constructor(private moneypeService:MoneyPeService) { }

  ngOnInit(): void {
  }
  lifeInsurance(insurance:Insurance){

    this.moneypeService.lifeInsurance(insurance);
  }

}
