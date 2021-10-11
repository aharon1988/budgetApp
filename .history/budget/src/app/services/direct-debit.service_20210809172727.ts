import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DirectDebitService {
  private BASE_URL = 'http://localhost:3000/direct-debits';

  constructor(private http: HttpClient) { }

getAllDirectDebits(){
  return this.http.get(`${this.BASE_URL}`)
}
 async createDirectDebit(data:any){
  console.log(data);
  
  return await this.http.post(`${this.BASE_URL}`,data)


}

}
