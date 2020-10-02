import { Component, OnInit } from '@angular/core';
import { MoneyPeService } from '../service/moneype.service';
import { Water } from '../service/water';

@Component({
  selector: 'app-waterbill',
  templateUrl: './waterbill.component.html',
  styleUrls: ['./waterbill.component.css']
})
export class WaterbillComponent implements OnInit {

  water:Water;

  constructor(private moneypeService:MoneyPeService) { }

  ngOnInit(): void {
  }
  waterBill(water:Water){
    this.moneypeService.waterBill(water);
  }

}
