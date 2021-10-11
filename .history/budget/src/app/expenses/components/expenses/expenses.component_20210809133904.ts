import { Component, OnInit } from '@angular/core';
import { DirectDebitService } from 'src/app/services/direct-debit.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
 displayDD = false;
 DDList:any = []

 constructor(private directDebitService:DirectDebitService) { }

  ngOnInit(): void {
  }
  showDirectDebit(){
    this.displayDD = true;

  }
  getAllDirectDebits(){
    this.directDebitService.getAllDirectDebits().subscribe(
      DD=>this.DDList = DD
      )
  }

}
