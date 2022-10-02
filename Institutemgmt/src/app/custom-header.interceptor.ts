import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Interceptor called');

        let apiKey = 'XXX-YY8678-AsdXXSFXXxdfsda'
        req = req.clone({
            setHeaders: {
                'custom-api-key': apiKey,
                'consumer-name' : 'Test'
            }
        });

        return next.handle(req).pipe(map(event => {
            if (event instanceof HttpResponse) {
                console.log(event.body);
            }
            return event;
        }));
        
    }

    // addition(i:number, j:number):number {
    //     return i+j;
    // }
   
}