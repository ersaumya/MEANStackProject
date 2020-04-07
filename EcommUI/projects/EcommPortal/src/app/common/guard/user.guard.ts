import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EncDecryptService } from "@ecomm/core";

@Injectable({
  providedIn: "root"
})
export class UserGuard implements  CanLoad {
  constructor(
    private encdecService: EncDecryptService,
    private router: Router
  ) {}
  
  
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
     if (sessionStorage.getItem("role") != null) {
       const role = this.encdecService.decrypt(
         sessionStorage.getItem("role"),
         ""
       );
       if (role === "User") {
         return true;
       } else {
         return false;
       }
     } else {
      return false;
     }
  }
}
