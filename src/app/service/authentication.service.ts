import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticateAdmin(username: any, password: any) {
    throw new Error('Method not implemented.');
  }
 
  constructor() { }


  authenticate(username:string,password:string){


    // http.post
      if(username === "123456789" &&  password === "pranathi"){

            sessionStorage.setItem('username',username);


            return true;
      }

        else{

          return false;
        }

  }


    isUserLoggedIn(){

          let user  = sessionStorage.getItem('username');

            console.log(!(user === null) );

          return  !(user == null) 

    }

   authenticateadmin(adminId:string,password:string){
      if(adminId === "123456789" &&  password === "anilkumar"){
            sessionStorage.setItem('adminId',adminId);
            return true;
      }
      else{
        window.alert("Invalid Username or password please enter again !!!")
          return false;
        }
  }
  isAdminLoggedIn(){
        let admin  = sessionStorage.getItem('adminId');  
            console.log(!(admin === null) );
          return  !(admin == null) 
    }
    logout(){
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('adminId');
    }
         
          

          
  
    }
      










