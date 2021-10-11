import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from '../expenses/components/expenses/expenses.component';
import { AppRoutingModule } from '../app-routing.module';
import { DirectDebitComponent } from '../direct-debit/direct-debit.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateDirectdebitComponent } from '../direct-debit/create-directdebit/create-directdebit.component';






@NgModule({
  declarations: [
    ExpensesComponent,
    DirectDebitComponent, 
  CreateDirectdebitComponent,



  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule


  ],
  exports: [ExpensesComponent],

  providers: [],
  bootstrap: [ExpensesComponent]
})
export class ExpensesModule { }
