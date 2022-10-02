import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-foreach',
  templateUrl: './foreach.component.html',
  styleUrls: ['./foreach.component.scss']
})
export class ForeachComponent implements OnInit {

  cartsData:any;
  outputResult:any;
  cartsArr:any[];
  cartsArrFilter:any[];
  cartsArrFind:any;
  constructor(private httpclient:HttpClient) { 
    
  }

  ngOnInit() {
    this.httpclient.get('https://dummyjson.com/carts').subscribe(
      (data) => {
        this.cartsData = JSON.parse(JSON.stringify(data));
        this.callForEach();
        this.callMap();
      
      }
    );
   
  }

  callForEach(){
    let carts:any[] = this.cartsData.carts;
    carts.forEach(cartValue => {
      cartValue.productName = "Bag";
      console.log(cartValue);
    }
    );
  }

  callMap(){
    this.cartsArr = this.cartsData.carts;
    this.cartsArr.map(x => {
      x.OfferPrice = x.price - (x.price*0.20);
      //x.productName = "Bag";
    });
    this.callFilter();
    this.callFind();
    console.log(this.cartsArr);

  }

  callFilter(){
    this.cartsArrFilter = this.cartsArr.filter(x => x.id <= 10);
    
  }

  callFind(){
    this.cartsArrFind = this.cartsArr.find(x => x.id == 10);
    console.log(this.cartsArrFind, 'find');
  }
}
