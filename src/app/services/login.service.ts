import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url ='http://localhost:8080/api/';


  public constructor(private httpClient: HttpClient) { }

  public login(login: string, password: string): Observable<any>{
    return this.httpClient.post<any>(
      this.url +"login/" + login + "/" + password,
      {responseType: 'json'}
    );
  }

  public regNewUser(login: string, password: string, role: number): Observable<any>{
    return this.httpClient.post<any>(
      this.url + "reg/" + login + "/" + password + "/" + role,
    {responseType: 'json'}
    );
  }



 


}
