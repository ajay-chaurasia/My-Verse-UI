import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { AppsComponent } from './apps.component';
import { BookLibraryComponent } from './book-library/book-library.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppsComponent,
    BookLibraryComponent,
    BmiCalculatorComponent
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppsModule { }
