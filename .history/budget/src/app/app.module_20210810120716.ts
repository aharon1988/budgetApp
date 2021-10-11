import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesModule } from './expenses/expenses.module';
import { IncomeModule } from './income/income.module';
import { DirectDebitComponent } from './direct-debit/direct-debit.component';
import { CreditCardComponent } from './credit-card/credit-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    // DirectDebitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExpensesModule,
    IncomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
