import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonInterceptor implements HttpInterceptor {
  
  constructor(public router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): import('rxjs').Observable<HttpEvent<any>> {
  
      if (req.url.includes(('/addMember'))) {
        req = req.clone({
          headers: req.headers.set('Access-Control-Allow-Origin', '*')
            .set('Content-Type', 'application/json'),
          responseType: 'json',
        });
      }
      
      
     
  
    return next.handle(req);
  }
}



