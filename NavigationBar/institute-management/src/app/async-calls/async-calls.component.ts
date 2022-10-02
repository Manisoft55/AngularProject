import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AsyncApiServiceService } from '../async-api-service.service';

@Component({
  selector: 'app-async-calls',
  templateUrl: './async-calls.component.html',
  styleUrls: ['./async-calls.component.scss']
})
export class AsyncCallsComponent implements OnInit {

  // userObjEvent:Subject<string> = new Subject<any>();
  userObj:any;

  quotesResponse: any;

  constructor(private asyncApiService: AsyncApiServiceService) { }

  ngOnInit() {    
    this.userObj = {
      username : "Rajesh",
      useremail : "Rajesh.kumar@gmail.com",
      userage: 35,
      usermobile : 9626611182
    }

    this.asyncApiService.getQuotesObs()
    .subscribe(data => {
      this.quotesResponse = data;
    });  
    // new Promise((resolve, reject) => {
    //   resolve(this.asyncApiService.getQuotes());
    // }
    // ).then((value: any) =>
    //   this.quotesResponse = value
    // ).catch((err) =>
    //   this.quotesResponse = null
    // );
  }

  assignUserInfo(){
    this.userObj = {
      username : "Rajesh",
      useremail : "Rajesh.kumar@gmail.com",
      userage: 35,
      usermobile : 9626611182
    }

    // this.userObjEvent.next(this.userObj);
  }

  receiveDataFromChild(message){
    alert('Data received from Child is : ' + message);
  }

}
