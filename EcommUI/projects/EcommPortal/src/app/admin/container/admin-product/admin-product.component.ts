import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../common/services/category.service';
import { AdminProductService } from '../../services/admin-product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-admin-product",
  templateUrl: "./admin-product.component.html",
  styleUrls: ["./admin-product.component.css"],
})
export class AdminProductComponent implements OnInit {
  
  categoryList: any;
  products: any;

  constructor(
    private categoryService: CategoryService,
    private productService: AdminProductService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  private getCategories() {
    this.categoryService.getCategories().subscribe((result) => {
      this.categoryList = result.data;
    });
  }

  private getProducts() {
    this.productService.getProductList().subscribe((result) => {
      if (result.status === "success") {
        this.products = result.data;
      }
    });
  }

  postProduct(productData: { imageUrl: File; product: any }) {
    this.productService
      .addProduct(productData.imageUrl, productData.product)
      .subscribe((result) => {
        if (result.status === "success") {
          this.snackBar.open("Product added successfully!", "Product", {
            duration: 1000,
          });
        }
      });
  }
}
