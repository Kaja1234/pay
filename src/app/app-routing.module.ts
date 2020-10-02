import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';


import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';

import { BalanceComponent } from './balance/balance.component';
import { MiniComponent } from './mini/mini.component';
import { FundComponent } from './fund/fund.component';
import { UtilityComponent } from './utility/utility.component';
import { KycComponent } from './kyc/kyc.component';
import { WaterbillComponent } from './waterbill/waterbill.component';
import { LicComponent } from './lic/lic.component';
import { CreditcardbillComponent } from './creditcardbill/creditcardbill.component';
import { EbillComponent } from './ebill/ebill.component';
import { MobilerechargeComponent } from './mobilerecharge/mobilerecharge.component';
import { MinistatementComponent } from './ministatement/ministatement.component';
import { AddservicesComponent } from './addservices/addservices.component';
import { DoorstepComponent } from './doorstep/doorstep.component';
import { Login1Component } from './login1/login1.component';

import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';





const routes: Routes = [
        //{path:'',redirectTo:'home',pathMatch:'full'},
      
        {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
        {path:'about',component:AboutComponent,canActivate:[AuthGuardService]},
        {path:'menu',component:MenuComponent,canActivate:[AuthGuardService]},
        
        {path:'contact',component:ContactComponent,canActivate:[AuthGuardService]},
        {path:'mini',component:MiniComponent,canActivate:[AuthGuardService]},
        {path:'fund',component:FundComponent,canActivate:[AuthGuardService]},
        {path:'utility',component:UtilityComponent,canActivate:[AuthGuardService]},
        {path:'kyc',component:KycComponent,canActivate:[AuthGuardService]},
        {path:'register',component:RegisterComponent},
        {path:'balance',component:BalanceComponent,canActivate:[AuthGuardService]},
        {path:'ebill',component:EbillComponent,canActivate:[AuthGuardService]},
        {path:'deposit',component:DepositComponent,canActivate:[AuthGuardService]},
        {path:'withdraw',component:WithdrawComponent,canActivate:[AuthGuardService]},
        
        {path:'waterbill',component:WaterbillComponent,canActivate:[AuthGuardService]},
        {path:'lic',component:LicComponent,canActivate:[AuthGuardService]},
        {path:'creditcardbill',component:CreditcardbillComponent,canActivate:[AuthGuardService]},
        {path:'mobilerecharge',component:MobilerechargeComponent,canActivate:[AuthGuardService]},
       
        {path:'login',component:LoginComponent},
        {path:'admin',component:AdminComponent,canActivate:[AuthGuardService]},
        {path:'doorstep',component:DoorstepComponent,canActivate:[AuthGuardService]},
        {path:'ministatement',component:MinistatementComponent,canActivate:[AuthGuardService]},
        {path:'addservices',component:AddservicesComponent,canActivate:[AuthGuardService]},
        {path:'login1',component:Login1Component},

        {path:'logout',component:LogoutComponent ,canActivate:[AuthGuardService]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
