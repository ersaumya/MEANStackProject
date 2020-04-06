import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class CustomInterceptorService implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log(req);
    return next.handle(req).pipe(
      map((event:HttpEvent<any>)=>{
        return event;
      }),catchError((error:HttpErrorResponse)=>{
        if(error.status===401){
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
}
