import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit-details',
  templateUrl: './user-edit-details.component.html',
  styleUrls: ['./user-edit-details.component.scss']
})
export class UserEditDetailsComponent implements OnInit {
  userInfo:any;
  userArray:any[] = [];
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe((params:any) => {
      console.log(params.username);
      this.userInfo = { 
        userage : params.userage,
        usermobile : params.usermobile
      }        
    }
    );
    this.userInfo.username = this.route.snapshot.queryParamMap.get('username');
    this.userInfo.useremail = this.route.snapshot.queryParamMap.get('useremail');
    this.userArray.push(this.userInfo);
    console.log(this.userInfo, 'userinfo')
  }

}
