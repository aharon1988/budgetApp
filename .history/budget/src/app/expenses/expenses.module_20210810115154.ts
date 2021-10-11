import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from '../expenses/components/expenses/expenses.component';
import { AppRoutingModule } from '../app-routing.module';
import { DirectDebitComponent } from '../direct-debit/direct-debit.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateDirectdebitComponent } from '../credit-card/create-directdebit/create-directdebit.component';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    ExpensesComponent,
    DirectDebitComponent, 
  CreateDirectdebitComponent,
  ReactiveFormsModule


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
