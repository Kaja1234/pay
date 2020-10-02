import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }


  authenticateAdmin(username:string,password:string){


    // http.post
      if(username === "123456789" &&  password === "0987654321"){

            sessionStorage.setItem('username',username);


            return true;
      }

        else{

          return false;
        }

  }


    isAdminLoggedIn(){

          let user  = sessionStorage.getItem('username');

            console.log(!(user === null) );

          return  !(user == null) 

    }

    
}
