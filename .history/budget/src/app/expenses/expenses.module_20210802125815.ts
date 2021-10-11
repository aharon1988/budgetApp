import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from '../expenses/components/expenses/expenses.component';




@NgModule({
  declarations: [
    ExpensesComponent

  ],
  imports: [
    CommonModule
  ],
  // exports: [ExpensesComponent],

  providers: [],
  bootstrap: [ExpensesComponent]
})
export class ExpensesModule { }
