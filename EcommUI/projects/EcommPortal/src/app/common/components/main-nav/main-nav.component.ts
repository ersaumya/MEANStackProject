import { Router } from '@angular/router';
import { Component, OnInit, Optional } from "@angular/core";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { IResponse } from '../../models/response.model';
import { LoginService } from '../../services/login.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"],
})
export class MainNavComponent implements OnInit {
  loginStatus$: Observable<boolean>;
  role$: Observable<string>;
  cart$: Observable<IResponse>;
  categories: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private loginService: LoginService,
    @Optional() private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginStatus$ = this.loginService.isLoggedIn();
    this.role$ = this.loginService.userRole();
    this.getCategories();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  private getCategories() {
    this.categoryService.getCategories().subscribe((result) => {
      this.categories = result.data;
    });
  }

  getProduct(categoryName: string) {
    this.router.navigate(["/user/product"], {
      queryParams: { category: categoryName },
    });
  }

  logout() {
    sessionStorage.clear();
    this.loginService.isLoggedIn(false);
    this.loginService.userRole("");
    this.router.navigate(["/login"]);
  }
}
