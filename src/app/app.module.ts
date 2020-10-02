import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';
import {FormsModule}  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { BalanceComponent } from './balance/balance.component';
import { MiniComponent } from './mini/mini.component';
import { FundComponent } from './fund/fund.component';
import { UtilityComponent } from './utility/utility.component';
import { KycComponent } from './kyc/kyc.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuardService } from './service/auth-guard.service';
import { EbillComponent } from './ebill/ebill.component';
import { MobilerechargeComponent } from './mobilerecharge/mobilerecharge.component';
import { WaterbillComponent } from './waterbill/waterbill.component';
import { LicComponent } from './lic/lic.component';
import { CreditcardbillComponent } from './creditcardbill/creditcardbill.component';
import { AdminComponent } from './admin/admin.component';
import { MinistatementComponent } from './ministatement/ministatement.component';
import { AddservicesComponent } from './addservices/addservices.component';
import { DoorstepComponent } from './doorstep/doorstep.component';
import { Login1Component } from './login1/login1.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MenuComponent,
    RegisterComponent,
    AboutComponent ,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    BalanceComponent ,
    MiniComponent ,
      FundComponent ,
    UtilityComponent,
   KycComponent,
   EbillComponent,
   MobilerechargeComponent,
   WaterbillComponent,
   LicComponent,
   CreditcardbillComponent,
   AdminComponent,
   MinistatementComponent,
   AddservicesComponent,
   DoorstepComponent,
   Login1Component,
   WithdrawComponent,
   DepositComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService,AuthGuardService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
