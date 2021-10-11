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
  array = [
    {categoryDisplayName: "Instance to optimize",
            data:[{'CloudAccountId': "1060952821882", 'Account name': "dome9-playground-1000070", 'Saving Potential': "562 $", 'Instance Name / ID': "ffsd", 'CPU Utilization': "avg: 30 max:50",'Current Size': "T3.small (2 cores, 2.0 GiB)",
            'Recommended Size':"t2.micro (1 cores, 1.0 GiB)"},
       {'CloudAccountId': "1060952821882", 'Account name': "dome9-playground-1000070", 'Saving Potential': "462 $", 'Instance Name / ID': "ffsd", 'CPU Utilization': "avg: 30 max:50",'Recommended Size':"t2.micro (1 cores, 1.0 GiB)"}]          
                                            },
    {categoryDisplayName: "Instance to schedule",
            data:[{'CloudAccountId': "1060952821882", 'Account name': "dome9-playground-1000070", 'Saving Potential': "462 $", 'Instance Name / ID': "ffsd",'Instance Size': "T3.small (2 cores, 2.0 GiB)", 'Additional Info': "The instance/VM ran for 30 hours this month."},
       {'CloudAccountId': "1060952821882", 'Account name': "dome9-playground-1000070", 'Saving Potential': "462 $", 'Instance Name / ID': "ffsd", 'CPU Utilization': "avg: 30 max:50"}]          
                                            },
    {categoryDisplayName: "Instance to stoped",
            data:[{'CloudAccountId': "1060952821882", 'Account name': "dome9-playground-1000070", 'Saving Potential': "462 $", 'Instance Name / ID': "ffsd",'Instance Size': "T3.small (2 cores, 2.0 GiB)", 'Additional Info': "The instance/VM ran for 30 hours this month."},
       {'CloudAccountId': "1060952821882", 'Account name': "dome9-playground-1000070", 'Saving Potential': "462 $", 'Instance Name / ID': "ffsd", 'CPU Utilization': "avg: 30 max:50"}]          
                                            },
    {categoryDisplayName: "Instance t",
            data:[{'CloudAccountId': "1060952821882", 'Account name': "dome9-playground-1000070", 'Saving Potential': "462 $", 'Instance Name / ID': "ffsd",'Instance Size': "T3.small (2 cores, 2.0 GiB)", 'Additional Info': "The instance/VM ran for 30 hours this month."},
       {'CloudAccountId': "1060952821882", 'Account name': "dome9-playground-1000070", 'Saving Potential': "462 $", 'Instance Name / ID': "ffsd", 'CPU Utilization': "avg: 30 max:50"}]          
                                            },

  ]
  exportToExcel(){
    console.log(this.directDebitService.directDebitsList);
    
    let all:any =this.summary()
    console.log(this.summary());
    
    
    let workbook = new xlsx. Workbook();
    for(let i of this.array){
      let n =2
    console.log(i.data[0]);
    
    let ws = workbook.addWorksheet(i.categoryDisplayName);  
    ws.getRow(1).values=Object.keys(i.data[0])
    for(let d of i.data){
      console.log(d);
      ws.getRow(n).values=Object.values(d)
      n++

    }
    ws.addRow(i.data[0])
    
  }
  let worksheet = workbook.addWorksheet('summary');
 
  worksheet.columns = [
    {  key: "name",width:52 },
    { key: "sum" ,width:52},
    { key: "date",width:52  },
    { key: "date",width:52  },
    { key: "date",width:52  },
    { key: "date",width:52  },
    { key: "date",width:52  },
    { key: "date",width:52  },
  ];
  let num = 4
for(let i in all){
  console.log(i);
  worksheet.getRow(num).values=all[i].accdit
  worksheet.getRow(num).font = { name: 'Arial', family: 4, size: 15, underline: 'none', bold: true };
  worksheet.getRow(num).height =25

  let categories = Object.keys(all[i].savings)
  console.log(categories);
  
  
    
    worksheet.getRow(num+1).values=Object.keys(all[i].savings)
      worksheet.getRow(num+1).fill= {
        type: 'pattern',
        pattern:'solid',
        fgColor:{argb:'FF8000'},
        bgColor:{argb:'FF0000'}
        
      };
      worksheet.getRow(num+1).height =40
    worksheet.getRow(num+1).font = { name: 'Arial', family: 4, size: 12, underline: 'none', bold: true };
  worksheet.getRow(num+2).values=Object.values(all[i].savings)
  worksheet.getRow(num+2).alignment  = { vertical: 'middle', horizontal: 'center', wrapText: true };

  worksheet.addRow({})


  
  
  


  num+=4
}

  


  workbook.xlsx.writeBuffer().then((data:any) => {
    let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fs.saveAs(blob, 'sa-recommmendations.xlsx');
  })


    // let direct_debits = "directdebits"
    // const wb: XLSX.WorkBook = XLSX.utils.book_new();
    // const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.directDebitService.directDebitsList);
    // // ws["!merges"] = [ XLSX.utils.decode_range("A6:C6") ];
    // // ws['!ref'] = "A2:B4"
    //     ws["!rows"]=[] 
    //     ws["!rows"][3] = {level:1},{hidden: true} 
         

    
    // XLSX.utils.book_append_sheet(wb, ws,direct_debits  );
    // XLSX.writeFile(wb, 'direct-debits.xlsx');


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



