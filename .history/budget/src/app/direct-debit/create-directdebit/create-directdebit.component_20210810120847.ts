import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DirectDebitService } from 'src/app/services/direct-debit.service';

@Component({
  selector: 'app-create-directdebit',
  templateUrl: './create-directdebit.component.html',
  styleUrls: ['./create-directdebit.component.scss']
})
export class CreateDirectdebitComponent implements OnInit {
  directDebit = new FormGroup({
    name: new FormControl(''),
    sum: new FormControl(''),
    date: new FormControl(''),
  });
  constructor(private directDebitService:DirectDebitService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.directDebit.value);
        this.directDebitService.createDirectDebit(this.directDebit.value).subscribe()

  }

}
