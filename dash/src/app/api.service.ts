import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers: HttpHeaders;
  private readonly apiUrl = environment.apiUrl;
  private readonly baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders();
    this.headers.append("Content-Type", 'application/json');
    this.headers.append("Accept", 'application/json');
    this.headers.append("Access-Control-Allow-Origin", '*');
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + 'login',
      {username: username, password: password},
      {headers: this.headers})
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getOrders():Observable<any>{
    return this.http.post(this.apiUrl+'all-orders',
    {headers: this.headers}
    ).pipe(
      map((res:any)=>{
        return res;
      })
    )
  }
  
}
