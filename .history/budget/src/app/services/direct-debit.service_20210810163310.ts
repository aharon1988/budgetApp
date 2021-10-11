import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DirectDebitService {
  private BASE_URL = 'http://localhost:3000/direct-debits';
  directDebitsList:any = []


  constructor(private http: HttpClient) { }

getAllDirectDebits(){
  return this.http.get(`${this.BASE_URL}`)
}
createDirectDebit(data:any){  
  return  this.http.post(`${this.BASE_URL}`,data)
}
deleteDirectDebit(id:number){
  return  this.http.delete(`${this.BASE_URL}id`)

}

}
