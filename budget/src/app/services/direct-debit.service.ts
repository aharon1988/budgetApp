import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DirectDebitService {
  private BASE_URL = 'http://localhost:3000/direct-debits';
  directDebitsList:any = []

  // private _deleteOperationSuccessfulEvent$: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) { }

getAllDirectDebits(){
  console.log("get");
  
  return this.http.get(`${this.BASE_URL}`)
}
createDirectDebit(data:any){  
  return  this.http.post(`${this.BASE_URL}`,data)
}
deleteDirectDebit(id:number){
  console.log("deleted");
  
  return  this.http.delete(`${this.BASE_URL}/${id}`)
  

}
// get deleteOperationSuccessfulEvent$(): Observable<boolean> {
//   return this._deleteOperationSuccessfulEvent$.asObservable();
// } 

}
