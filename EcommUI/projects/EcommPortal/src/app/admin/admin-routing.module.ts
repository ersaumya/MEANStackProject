import { AuthGuard } from './../common/guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './guard/admin.guard';
import { CategoryComponent } from './container/category/category.component';
import { AdminProductComponent } from './container/admin-product/admin-product.component';



const routes: Routes = [
  {
    path: "dashboard",
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: "category",
    component: CategoryComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: "product",
    component: AdminProductComponent,
    canActivate: [AuthGuard, AdminGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
