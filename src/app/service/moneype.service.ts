import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from './credit';
import { Deposit } from './deposit';
import { Electric } from './electric';
import { Insurance } from './insurance';
import { Kyc } from './kyc';
import { Mobile } from './mobile';
import { Money } from './money';
import { Register } from './register';
import { Water } from './water';
import { Withdraw } from './withdraw';


@Injectable({
  providedIn: 'root'
})
export class MoneyPeService {

  url:string="http://localhost:9090/MoneyPe";

  constructor(private http:HttpClient) { }

  waterBill(water:Water){
     
    this.http.post<Water>(this.url+"/waterbill",water)
            .subscribe(water => alert("Water bill paid Successfully ") );

  } 

  moneyTransfer(money:Money){
     
    this.http.post<Money>(this.url+"/moneytransfer",money)
            .subscribe(money => alert("Transcation done sucessfully ") );

  } 

  mobileRecharge(mobile:Mobile){
     
    this.http.post<Mobile>(this.url+"/recharge",mobile)
            .subscribe(mobile => alert("Recharge  done sucessfully ") );

  } 

  creditBill(credit:Credit){
     
    this.http.post<Credit>(this.url+"/creditcard",credit)
            .subscribe(credit => alert("  creditBill paid sucessfully ") );

  } 

  electricBill(electric:Electric){
     
    this.http.post<Electric>(this.url+"/electric",electric)
            .subscribe(electric => alert("  ElectricBill paid sucessfully ") );

  } 

  lifeInsurance(insurance:Insurance){
     
    this.http.post<Insurance>(this.url+"/lifeinsurance",insurance)
            .subscribe(insurance => alert("  Insurance paid sucessfully ") );

  } 

  userKyc(kyc:Kyc){
     
    this.http.post<Kyc>(this.url+"/addkyc",kyc)
            .subscribe(kyc => alert("  Kyc updated sucessfully ") );

  } 

  userRegister(register:Register){
     
    this.http.post<Register>(this.url+"/add",register)
            .subscribe(register => alert("  Account Created Sucessfully "+register.accountNumber) );

  } 

  moneyDeposit(deposit:Deposit){
     
    this.http.post<Deposit>(this.url+"/deposit",deposit)
            .subscribe(deposit => alert("  Amount deposited Sucessfully ") );

  } 

  moneyWithdraw(withdraw:Withdraw){
     
    this.http.post<Withdraw>(this.url+"/withdraw",withdraw)
            .subscribe(withdraw => alert("  Amount withdraw Sucessfully ") );

  } 


  statement():Observable<any>{

    return   this.http.get(this.url+"/getministatement");
  
  
  }

  statement1():Observable<any>{

    return   this.http.get(this.url+"/balance");
  
  
  }
  
}
