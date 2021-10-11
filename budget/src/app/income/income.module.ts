import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from './components/income/income.component';



@NgModule({
  declarations: [
    IncomeComponent
  ],
  exports: [IncomeComponent],

  imports: [
    CommonModule
  ]
  
})
export class IncomeModule { }
