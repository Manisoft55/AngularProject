import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  username:any;
  password:any;
  constructor() { }

  IsUserAuthenticate(username:any, password:any){
    if(username == 'rajesh' && password == 'password'){
      return true;
    }
    return false;
   
  }

  IsUserAuthorized(rolename:any){
    if(rolename == "owner")
    {
      return true;
    }
    else
    {
      return false;
    }
   
  }
}
