import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CategoryComponent } from './container/category/category.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { MaterialModule } from '../shared/material.module';
import { AdminProductComponent } from './container/admin-product/admin-product.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';


@NgModule({
  declarations: [AdminDashboardComponent, CategoryComponent, CategoryAddComponent, CategoryListComponent, AdminProductComponent, ProductAddComponent, ProductListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
