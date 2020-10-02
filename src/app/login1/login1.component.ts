import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';



@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  invalidLogin=false;
 
  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  adminLogin(data){

    if(this.authService.authenticate(data.username,data.password)){

        this.router.navigate(['']);
        this.invalidLogin = false;

    }

    else
      this.invalidLogin = true;



}

}
