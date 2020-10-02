import { Component, OnInit } from '@angular/core';
import { MoneyPeService } from '../service/moneype.service';
import { Register } from '../service/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:Register;

  constructor(private moneypeService:MoneyPeService) { }

  ngOnInit(): void {
  }

  userRegister(register:Register){

    this.moneypeService.userRegister(register);
  }

}
