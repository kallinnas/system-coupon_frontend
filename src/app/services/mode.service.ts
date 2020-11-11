import { Injectable, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeService
{

  private url = 'http://localhost:8080/api/';

  readonly ROLE_USER: string = '0';
  readonly ROLE_CUSTOMER: string = '1';
  readonly ROLE_COMPANY: string = '2';
  readonly ROLE_ADMIN: string = '3';
  public _clientType: string = '';
  // filter: boolean = false;

  readonly LOGGED_IN: string = 'LOGGED_IN';
  readonly LOGGED_OUT: string = 'LOGGED_OUT';
  mode: string = this.LOGGED_OUT;


  public constructor(
    private httpClient: HttpClient) {
  }

  // getter method
  get clientType(): string {
    // check if the client type is catched (in memory)
    if (this._clientType !== this.ROLE_USER) {
      //console.log('Using clientType field from memory');
      return this._clientType;
    }
    // if the the clientType is not loaded (null) fetch the role from localStorage
    // console.log('Fetching the role from localStorage');
    return this._clientType = localStorage.getItem('role');
  }

  set clientType(type: string) {
    this._clientType = type;
  }

  //Gets role# from session from backEnd
  public getClientTypeRest(token: string): Observable<String> {
    return this.httpClient.get<String>(
      this.url + token + "/getAccount",
      { responseType: 'json' }
    );
  }

  public setUsersClientType() {
    if (localStorage.getItem("token") != null) {
      this.getClientTypeRest(localStorage.getItem("token"))
        .subscribe(role => {
          if (role == this.ROLE_CUSTOMER) {
            this.clientType = this.ROLE_CUSTOMER;
          } else if (role == this.ROLE_COMPANY) {
            this.clientType = this.ROLE_COMPANY;
          } else if (role == this.ROLE_ADMIN) {
            this.clientType = this.ROLE_ADMIN;
          };
          localStorage.setItem('role', this._clientType);
          console.log(role);
        })
      err => alert(err);
    } else this._clientType = this.ROLE_USER;
  }


}
