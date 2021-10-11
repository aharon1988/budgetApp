import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DirectDebitService } from 'src/app/services/direct-debit.service';

@Component({
  selector: 'app-create-directdebit',
  templateUrl: './create-directdebit.component.html',
  styleUrls: ['./create-directdebit.component.scss']
})
export class CreateDirectdebitComponent implements OnInit {
  already = '';
  directDebit = new FormGroup({
    name: new FormControl(''),
    sum: new FormControl(''),
    date: new FormControl(''),
  });
  constructor(public directDebitService:DirectDebitService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.directDebit.value);
   const exist = this.directDebitService.directDebitsList.forEach((element:any) => {
    return  element.name!=this.directDebit.value.name&&
      element.sum!=this.directDebit.value.sum&&
      element.date!=this.directDebit.value.date
      
    });
    console.log(exist);
    
    if(exist)
    this.directDebitService.createDirectDebit(this.directDebit.value).subscribe()
    this.already = "this already exist"
    
    this.directDebitService.getAllDirectDebits().subscribe(
      dd=>this.directDebitService.directDebitsList = dd
      )
    // this.already=''


        this.directDebit.reset()

  }

}
