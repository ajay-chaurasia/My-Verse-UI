import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsComponent } from './apps.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { BookLibraryComponent } from './book-library/book-library.component';

const routes: Routes = [
  { path: '', component: AppsComponent },
  { path: 'bmi-calculator', component: BmiCalculatorComponent },
  { path: 'book-library', component: BookLibraryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
