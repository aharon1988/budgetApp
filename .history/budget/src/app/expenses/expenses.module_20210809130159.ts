import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from '../expenses/components/expenses/expenses.component';
import { AppRoutingModule } from '../app-routing.module';
import { DirectDebitComponent } from '../direct-debit/direct-debit.component';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    ExpensesComponent,
    DirectDebitComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [ExpensesComponent],

  providers: [],
  bootstrap: [ExpensesComponent]
})
export class ExpensesModule { }
