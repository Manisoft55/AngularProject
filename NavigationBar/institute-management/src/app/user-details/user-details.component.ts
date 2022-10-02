import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userInfo:any;

  constructor(private route: ActivatedRoute, private router:Router) { }

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
      console.log(this.userInfo, 'userinfo')
  }

  goToUserEditPage(){
    this.router.navigate(
      ['/user-edit'],      
      { queryParams: { uname: this.userInfo.username, umobile : this.userInfo.usermobile }, 
      queryParamsHandling: 'preserve' } //      queryParamsHandling="merge"
  
    );  
  }

}
