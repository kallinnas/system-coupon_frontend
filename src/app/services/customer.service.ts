import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Coupon } from '../models/coupons';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  private url ='http://localhost:8080/api/';
  private token = localStorage.getItem("token");

  public constructor(private client: HttpClient) { }

  // GETTER'S FOR COMPANY
  public getCompanyByIdRest(id: number): Observable<Company> {
    return this.client.get<Company>(this.url + "customer/" + this.token +
      "/getCompanyById/" + id, { withCredentials: true });
  }



  
  // GETTER'S FOR COUPON
  public getAllCompanyCoupons(id: number): Observable<Coupon[]> {
    return this.client.get<Coupon[]>(this.url + "customer/" + this.token +
      "/companyCoupons/" + id, { withCredentials: true });
  }

  public getAllCouponsRest(): Observable<Coupon[]>{
    return this.client.get<Coupon[]>(this.url + "customer/" + this.token + "/getAllCoupons", {withCredentials: true});
  }

  public getCustomersAccountRest(): Observable<Customer>{
    return this.client.get<Customer>(
      this.url + "customer/" + this.token + "/getCustomer",
      {responseType: 'json'}
    );
  }

  // DELETE CUSTOMER
  public deleteCustomerRest(id: number): Observable<any> {
    return this.client.delete<Customer>(this.url +
      "customer/" + this.token + "/deleteCustomerById/" + 
      id, {withCredentials: true});
  }

  // UPDATE
  public updateCustomerRest(customer: Customer):Observable<Customer> {
    return this.client.put<Customer>(this.url + "customer/" +
    this.token + "/updateCustomer", customer, 
    {withCredentials: true});
  }
}
