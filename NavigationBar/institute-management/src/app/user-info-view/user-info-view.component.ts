import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-view',
  templateUrl: './user-info-view.component.html',
  styleUrls: ['./user-info-view.component.scss']
})
export class UserInfoViewComponent implements OnInit {
  userObj: any;
  constructor() { }
  count = 0;
 
  increment(incre:any) {
    console.log(incre);
    this.count++;
  }
  decrement() {
    this.count--;
  }


  ngOnInit() {
    console.log(this.userObj);
  }

}
