import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-angular-test-page',
  templateUrl: './angular-test-page.component.html',
  styleUrls: ['./angular-test-page.component.scss']
})
export class AngularTestPageComponent implements OnInit {

  testPageContent:string;
  testStringFromMethod:string;
  propertyBinding: string;
  twoWayDataBinding: string;
  fullName:string = "Test";

  constructor(private userService:UserServiceService) { }

  ngOnInit() {
    this.testPageContent = "Test Page content from typescript file";
    this.propertyBinding = "Text from property binding";
    this.testMethod();
   // alert(this.userService.getUserName());
  }

  testMethod(){
    this.testStringFromMethod = "Test Page content from Test Method in typescript file";
  }

  eventBinding(){
    alert('Event binding works!!!');
  }

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];
}
