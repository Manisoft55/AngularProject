import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-angular-sub-page',
  templateUrl: './angular-sub-page.component.html',
  styleUrls: ['./angular-sub-page.component.scss']
})
export class AngularSubPageComponent implements OnInit {

  employee: any[];
  users: any[];
  currencyValue: number = 1000000;
  dateOfBirth = new Date('2016-11-30');
  Price:number = 590;

  constructor(private userService: UserServiceService, private httpClient: HttpClient) { }

  ngAfterContentInit() {
    alert('ngAfterContentInit');
  }

  ngOnInit() {
    alert('ngOnInit');

    this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe(
      (data) => {
        // let dataarr: any[] = [];
        // dataarr.push(data);
        // this.users = dataarr;
        // console.log('users', this.users);
        this.users = JSON.parse(JSON.stringify(data));
        console.log('users', this.users);
      }
    );

    //alert(this.userService.getUserName());
    this.userService.userName = "TestUserOne";

    //Forming an array
    this.employee = [
      {
        "EmpFirstName": "Rajesh",
        "EmpAge": 24,
        "EmpNative": "Chennai",
        "EmpRating": "A"
      },
      {
        "EmpFirstName": "Kumar",
        "EmpAge": 30,
        "EmpNative": "Trichy",
        "EmpRating": "A"
      },
      {
        "EmpFirstName": "Shivan",
        "EmpAge": 35,
        "EmpNative": "Pondy",
        "EmpRating": "B"
      },
      {
        "EmpFirstName": "Amal",
        "EmpAge": 45,
        "EmpNative": "Coimbatore",
        "EmpRating": "B"
      },
      {
        "EmpFirstName": "Suresh",
        "EmpAge": 24,
        "EmpNative": "Erode",
        "EmpRating": "C"
      }
    ];

  }

}

@Pipe({
  name: 'displayOfferPrice'
})

export class DisplayOfferPrice implements PipeTransform {

  transform(price: number) {
    return price - (0.30 * price);
  }

}

@Pipe({
  name: 'OfferPrice'
})

export class OfferPrice implements PipeTransform {

  transform(price: number) {
    return 0.30 * price;
  }

}





@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {
  transform(n: number): string {
    return n + 'Kg';
  }
}
