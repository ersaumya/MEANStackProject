import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../../common/services/category.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  catList: any;

  constructor(
    private categoryService: CategoryService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe((result) => {
      if (result.status === "success") {
        this.catList = result.data;
      }
    });
  }

  saveCategories(category: any) {
    this.categoryService.postCategories(category).subscribe((result) => {
       this._snackBar.open(result.message, "Category", {
         duration: 1000,
       });
      this.loadCategories();
    });
  }
}
