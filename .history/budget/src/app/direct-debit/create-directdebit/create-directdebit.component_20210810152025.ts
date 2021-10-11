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
   exist:boolean=true
  directDebit = new FormGroup({
    name: new FormControl(''),
    sum: new FormControl(''),
    date: new FormControl(''),
  });
  constructor(public directDebitService:DirectDebitService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    // console.log(this.directDebit.value);
   this.directDebitService.directDebitsList.forEach((element:any) => {
    //  console.log(element);
     if( element.name!=this.directDebit.value.name&&
      element.sum!=this.directDebit.value.sum&&
      element.date!=this.directDebit.value.date){
        this.exist = false
      }else{
        console.log("jfkdjfkdjfdkjf");
        
        this.exist =true
      }
      
    });
    console.log(this.exist);
    
    // if(exist)
    this.directDebitService.createDirectDebit(this.directDebit.value).subscribe()
    this.already = "this already exist"
    
    this.directDebitService.getAllDirectDebits().subscribe(
      dd=>this.directDebitService.directDebitsList = dd
      )
    // this.already=''


        this.directDebit.reset()

  }

}
