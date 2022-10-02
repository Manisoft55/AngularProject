import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap, map } from 'rxjs/operators';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-carts-details',
  templateUrl: './carts-details.component.html',
  styleUrls: ['./carts-details.component.scss']
})
export class CartsDetailsComponent implements OnInit {

  cartsData: any;
  outputResult: any;
  cartsArr: any[];
  cartsArrFilter: any[];
  cartsArrFind: any;
  findValue: any;
  filterValue: any;
  cartsResults: any[];

  constructor(private httpclient: HttpClient, private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getGames().subscribe(
      games => {
        // console.log(games, 'games');
      },
      error => { }
    );

    this.testMethod();


    this.httpclient.get('https://dummyjson.com/carts').subscribe(
      (data) => {
        this.cartsData = JSON.parse(JSON.stringify(data));
        this.cartsResults = this.cartsData.carts;
        // this.callForEach();
        // this.callMap();

      }
    );

  }


  testMethod() {
    let data = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    this.apiService.postData(data).subscribe((datat) => {
      console.log(datat);
    })
  }

  getGames(): Observable<any[]> {
    return this.httpclient.get<any[]>("https://dummyjson.com/carts").pipe(
      tap(data => data),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  callForEach() {
    let carts: any[] = this.cartsData.carts;
    carts.forEach(cartValue => {
      cartValue.productName = "Bag";
      console.log(cartValue);
    }
    );
  }

  callMap() {
    this.cartsArr = this.cartsData.carts;
    this.cartsArr.map(x => {
      x.OfferPrice = x.price - (x.price * 0.20);
      //x.productName = "Bag";
    });
    this.callFilter();
    this.callFind();
    console.log(this.cartsArr);

  }

  callFilter() {
    this.cartsArrFilter = this.cartsArr.filter(x => x.id <= 10);

  }

  callFind() {
    this.cartsArrFind = this.cartsArr.find(x => x.id == 10);
    // console.log(this.cartsArrFind, 'find');
  }

  filterRecords() {
    this.cartsResults = [];
    this.httpclient.get('https://dummyjson.com/carts').subscribe(
      (data) => {
        this.cartsData = JSON.parse(JSON.stringify(data));
        this.cartsResults = this.cartsData.carts;
        // this.callForEach();
        // this.callMap();
        let cart: any[] = this.cartsData.carts;
        this.cartsResults = cart.filter(x => x.id <= this.filterValue)
      }
    );

  }

  findRecords() {
    this.cartsResults = [];
    let cart: any = this.cartsData.carts.find(x => x.id == this.findValue);
    this.cartsResults.push(cart);
  }

  resetRecords() {
    this.cartsResults = this.cartsData.carts;
    this.findValue = '';
    this.filterValue = '';
  }

}
