import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseURL:string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  postData(requestBody:any): Observable<any> {
    const headers = { 'Content-type': 'application/json; charset=UTF-8', 'api-key':'XXXXXDFSDF-ASDFD' }
    const body=JSON.stringify(requestBody);
    return this.http.post(this.baseURL, body,{'headers':headers})
  }
}
