import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EncDecryptService } from "@ecomm/core";

@Injectable({
  providedIn: "root"
})
export class UserGuard implements CanActivate, CanLoad {
  constructor(
    private encdecService: EncDecryptService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (sessionStorage.getItem("role") != null) {
      const role = this.encdecService.decrypt(
        sessionStorage.getItem("role"),
        ""
      );
      if (role === "User") {
        return true;
      } else {
        this.navigateToLogin(state);
      }
    } else {
      this.navigateToLogin(state);
    }
  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  navigateToLogin(state: RouterStateSnapshot) {
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
