import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatDividerModule } from "@angular/material/divider";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

const materialModules = [
  CommonModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSnackBarModule,
  MatTableModule,
  MatDividerModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class MaterialModule {}
