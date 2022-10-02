import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoViewComponent } from '../user-info-view/user-info-view.component';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {
  myForm:FormGroup;
  userInformations:any[] =[];

  @ViewChild(UserInfoViewComponent, { static: true }) child: UserInfoViewComponent;


  // Input decorator
  // @Input() userDetails:any;
  userDetails:any;
  // Output decorator & Event Emitter
  @Output() username = new EventEmitter<any>();


  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit() {
    console.log(this.userDetails);
    // this.myForm = this.fb.group({
    //   username: [this.userDetails.username, Validators.required],
    //   useremail: [this.userDetails.useremail, [Validators.required, Validators.email]],
    //   userage: [this.userDetails.userage, [Validators.required, Validators.max(190)]],
    //   usermobile: [this.userDetails.usermobile, [Validators.required, Validators.maxLength(10)]]
    // });

    this.myForm = this.fb.group({
      username: ['', Validators.required],
      useremail: ['', [Validators.required, Validators.email]],
      userage: ['', [Validators.required, Validators.max(190)]],
      usermobile: ['', [Validators.required, Validators.maxLength(10)]]
    });
  }

  onSubmit(userInfo:FormGroup){
    
    let userObj = {
      username : userInfo.value.username,
      useremail : userInfo.value.useremail,
      userage: userInfo.value.userage,
      usermobile : userInfo.value.usermobile
    }
    this.userInformations.push(userObj);
    console.log(this.userInformations);
    console.log('object', userObj);
    console.log('Valid?', userInfo.valid); 
    console.log(userInfo.value.username);
    console.log(userInfo.value.useremail);
    console.log(userInfo.value.userage);
    console.log(userInfo.value.usermobile);
    
    this.child.userObj = userObj;
    this.router.navigate(
      ['/user-info-view-child']
    );
    // this.router.navigate(
    //   ['/user-details'],
    //   { queryParams: userObj }
    // );
  
  }

  increment() {
    this.child.increment('incrementing');
  }
 
  decrement() {
    this.child.decrement();
  }


  sendUserNameToParent(myForm:FormGroup){
    // alert(myForm.value.username);
    let uname = myForm.value.username;
    this.username.emit(this.userDetails);
  }

}
