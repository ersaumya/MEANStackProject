import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CategoryService } from '../../../common/services/category.service';


@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.css"],
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ["_id", "categoryName", "isLive"];
  
 

  @Input() categoryList: any;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    
  }
}
