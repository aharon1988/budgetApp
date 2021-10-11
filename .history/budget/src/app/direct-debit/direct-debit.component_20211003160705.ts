import { Component, OnInit } from '@angular/core';
import { DirectDebitService } from '../services/direct-debit.service';
import { BehaviorSubject } from 'rxjs';
import * as XLSX from 'xlsx';

// import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
// const ExcelJS = require('exceljs');
const xlsx = require('exceljs');
@Component({
  selector: 'app-direct-debit',
  templateUrl: './direct-debit.component.html',
  styleUrls: ['./direct-debit.component.scss']
})
export class DirectDebitComponent implements OnInit {
  categories:any = []
  update=new BehaviorSubject<boolean>(false);

  headElements = ['Name', 'Sum', 'Date'];



    // {name:"school",sum:970,date:"1/9/2021" },
    
    
    // {name:"Cellcom",sum:234,date:"7/9/2021"},
    // {name:"computer",sum:67,date:"6/9/2021"}
  
  

  constructor(public directDebitService:DirectDebitService) { }

  ngOnInit(): void {
    console.log("hfjdhfkjdfndjfhedfh");
    

    
    
    // this.directDebitService.createDirectDebit(this.DDListPost).subscribe()
    
    this.directDebitService.getAllDirectDebits().subscribe(
      dd=>this.directDebitService.directDebitsList = dd
      )
      console.log(this.directDebitService.directDebitsList);
  }
  fetchData(): void {
    this.directDebitService.getAllDirectDebits().subscribe(
      dd=>this.directDebitService.directDebitsList = dd
      )
      
  }
  dleteD(event:any){
    console.log(event);
   let r= this.directDebitService.deleteDirectDebit(event)
   r.subscribe(()=>this.update.next(true))
    
   this.update.subscribe(update=>update === true ? this.fetchData() : '');

  }
  
  exportToExcel(){
    


    let direct_debits = "directdebits"
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.directDebitService.directDebitsList);
    

    
    XLSX.utils.book_append_sheet(wb, ws,direct_debits  );
    XLSX.writeFile(wb, 'direct-debits.xlsx');


  }
  

//   sumOfDirectDebit(){

//     const reduce = this.DDList.reduce((total,person)=>{
//       return person.sum + total
//   },0) 
//     return reduce
// }
summary(){

  this.categories = [{
    name:"Unattached Disks/Volumes",
    accounts:[
      
      { name: "nonprodlztest-5000601",id:"466210593539", savingsSum: 2596 ,sumInstaces:2},
      { name: "idm-51187418",id:"340158791877", savingsSum: 1803 ,sumInstaces:2},
      { name: "nonprodlztest-6000601",id:"566210593539", savingsSum: 787 ,sumInstaces:2},
      
      
    ]
  },
  {name:"Instance to schedule",
  accounts:[
    { name: "nonprodlztest-6000601",id:"566210593539", savingsSum: 3149 ,sumInstaces:2},
    { name: "dome9-playground-0000070",id:"960952821882", savingsSum: 1937 ,sumInstaces:2}
  ]
},
{name:"Stopped instances/VM",
accounts:[
  { name: "nonprodlztest-5000601",id:"466210593539", savingsSum: 2613 ,sumInstaces:3},
  { name: "nonprodlztest-6000601",id:"566210593539", savingsSum: 2185 ,sumInstaces:2},
]
},
{name:"Instance to optimize",
accounts:[
  { name: "nonprodlztest-6000601",id:"566210593539", savingsSum: 2316 ,sumInstaces:2},
  { name: "nonprodlztest-5000601",id:"466210593539", savingsSum: 1137 ,sumInstaces:2},
  { name: "dome9-playground-1000070",id:"1060952821882", savingsSum: 462 ,sumInstaces:1},
  { name: "office365_API_for_IDM",id:"992c68ea-988a-4b64-92ff-b5ac6a987eb2", savingsSum: 424 ,sumInstaces:1},
]
}
]
let rr:any = {}
// let summary = []


for(let c of this.categories){
  console.log("----------------");
  console.log(c.name);
  for(let account of c.accounts){
      if(!rr[account.name]){

        rr[account.name] = {accdit:[account.name,account.id],savings:{}}
      }
          

        
            rr[account.name]['savings']["Saving potential "+c.name] =account.savingsSum+"$"    // rr[account.id] = {}
            rr[account.name]['savings']["num of recomandation -   "+c.name] =account.sumInstaces    // rr[account.id] = {} 
       
    }  
}
// for(let i in rr){
  return rr
}


}



