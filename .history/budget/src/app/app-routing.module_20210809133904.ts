import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectDebitComponent } from './direct-debit/direct-debit.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

const routes: Routes = [
  // { path: 'Direct-Debit', component: DirectDebitComponent },
  { path: 'Credit-Card', component: CreditCardComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
