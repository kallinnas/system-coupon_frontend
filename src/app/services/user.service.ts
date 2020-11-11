import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/api/';

  constructor(private client: HttpClient) { }

  public changeEmail(email: string, password: string, newE: string): Observable<any> {
    return this.client.post<any>(this.url +
      "changeEmail/" + email + "/" + password + "/" + newE,
      { responseType: 'json' }
    );
  }

  public getUserByEmailAndPswd(email: string, password: string): Observable<any> {
    return this.client.get<any>(this.url +
      "user/" + email + "/" + password,
      { responseType: 'json' }
    );
  }

  public getAllCompaniesREST(): Observable<Company[]> {
    return this.client.get<Company[]>(this.url +
      "user/getAllCompanies", { withCredentials: true })
  }




}
