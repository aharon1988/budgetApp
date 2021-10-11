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
   let exist = this.directDebitService.directDebitsList.some((d:any)=>{
    return d.name ==this.directDebit.value.name&&d.sum==this.directDebit.value.sum
    &&d.date==this.directDebit.value.date
   })
   exist==false?this.directDebitService.createDirectDebit(this.directDebit.value).subscribe()
   :alert( "this already exist")

   
    
    
    
    
    // this.directDebitService.getAllDirectDebits().subscribe(
    //   dd=>this.directDebitService.directDebitsList = dd
    //   )
      
      
      this.directDebit.reset()
      this.already=''

  }

}
