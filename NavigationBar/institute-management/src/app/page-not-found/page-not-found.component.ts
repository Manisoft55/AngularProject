import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  userObj: any;
  constructor() { }

  ngOnInit() {
    this.userObj = {
      username : "Rajesh from Page Not Found",
      useremail : "Rajesh.kumar@gmail.com",
      userage: 35,
      usermobile : 9626611182
    }

  }

  receiveDataFromChild(message){
    console.log('obj', message);
    alert('Data received from Child is : ' + message);
  }

}
