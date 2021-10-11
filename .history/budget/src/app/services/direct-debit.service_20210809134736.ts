import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DirectDebitService {
  private BASE_URL = 'localhost:3000/api/server';

  constructor(private http: HttpClient) { }

getAllDirectDebits(){
  return this.http.get(`${this.BASE_URL}direct-debits`)
}

}
