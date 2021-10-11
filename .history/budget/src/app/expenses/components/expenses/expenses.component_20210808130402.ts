import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
 displayDD = false;
  constructor() { }

  ngOnInit(): void {
  }
  showDirectDebit(){
    this.displayDD = true;

  }

}
