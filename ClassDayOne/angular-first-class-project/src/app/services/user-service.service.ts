import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userName:string;
  constructor() { 
    this.userName = "TestUser";
  }

  setUserName(name){
    this.userName = name;
  }

  getUserName(){
    return this.userName;
  }
}
