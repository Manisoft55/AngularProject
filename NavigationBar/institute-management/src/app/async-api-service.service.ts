import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncApiServiceService {

  constructor(private httpclient:HttpClient) { 
    
  }

  getQuotes(){
     return this.httpclient.get("https://dummyjson.com/quotes")
     .subscribe((responsedata) => {
      return responsedata;
    })
  }

  getQuotesObs():Observable<any>{
    return this.httpclient.get("https://dummyjson.com/quotes");
 }
}
