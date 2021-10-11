import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class DirectDebitService {
  private BASE_URL = 'http://localhost:3000/direct-debits';

  constructor(private http: HttpClient) { }

getAllDirectDebits(){
  return this.http.get(`${this.BASE_URL}`)
}
async createDirectDebit(data:any[]){
  console.log(data);
  data.forEach(async element =>{

    return await this.http.post(`${this.BASE_URL}`,element)
  }
   
    );


}

}
