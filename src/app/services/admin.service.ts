import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Coupon } from '../models/coupons';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  private url ='http://localhost:8080/api/';
  private token: string = localStorage.getItem("token");

  public constructor(private client: HttpClient) { }

  // UPDATE'S
  public updateCompanyRest(company: Company): Observable<Company>{
    return this.client.put<Company>(this.url + "admin/" +
     this.token + "/updateCompany", company, 
     {withCredentials: true});
  }

  public updateCouponRest(coupon: Coupon):Observable<Coupon>{
    return this.client.put<Coupon>(this.url + "admin/" +
    this.token + "/updateCoupon", coupon, {withCredentials:true});
  }

  public updateCustomerRest(customer: Customer):Observable<Customer> {
      return this.client.put<Customer>(this.url + "admin/" +
      this.token + "/updateCustomer", customer,
      {withCredentials: true});
  }
 



  // DELETE'S
  public deleteCompany(id: number): Observable<any> {
    return this.client.delete<any>(this.url + "admin/" + 
    this.token + "/deleteCompanyById/" + id, {withCredentials: true});
  }

  public deleteCouponRest(id: number):Observable<any>{
    return this.client.delete<any>(this.url + "admin/" +
    this.token + "/deleteCoupon/" + id, {withCredentials: true});
  }

  public deleteCustomersCouponRest(customerId: number, couponId: number):Observable<any> {
    return this.client.delete<any>(this.url + "admin/" + 
    this.token + "/deleteCustomersCoupon/" + customerId + 
    "/" + couponId, {withCredentials:true});
  }

  public deleteCustomerRest(id: number): Observable<any>{
    return this.client.delete<any>(this.url + "admin/" +
    this.token + "/deleteCustomerById/" +id, {withCredentials: true});
  }




  // GETTER'S FOR COUPON
  public getAllCouponsRest():Observable<Coupon[]>{
    return this.client.get<Coupon[]>(this.url + "admin/" +
    this.token + "/getAllCoupons", {withCredentials: true});
  }

  public getCompanyCouponsRest(id: number):Observable<Coupon[]>{
    return this.client.get<Coupon[]>(this.url + "admin/" +
    this.token + "/getCompanyCoupons/" + id, {withCredentials: true});
  }

  public getCustomerCouponsRest(id: number): Observable<Coupon[]> {
    return this.client.get<Coupon[]>(this.url + "admin/" +
    this.token + "/getCustomerCoupons/" + id, {withCredentials: true});
  }



  

  // GETTER'S FOR COMPANY
  public getCompanyByIdRest(id: number): Observable<Company> {
    return this.client.get<Company>(this.url + "admin/" + this.token +
      "/getCompanyById/" + id, { withCredentials: true });
  }

  public getAllCompaniesRest():Observable<Company[]>{
    return this.client.get<Company[]>(this.url + "admin/" 
    + this.token + "/companies", {withCredentials: true});
  }

  
  // GETTER'S FOR CUSTOMER
  public getAllCustomersRest():Observable<Customer[]> {
    return this.client.get<Customer[]>(this.url + "admin/" +
    this.token + "/getAllCustomers", {withCredentials: true});
  }

  public getCustomerByIdRest(id: number): Observable<Customer> {
    return this.client.get<Customer>(this.url + "admin/" +
    this.token + "/getCustomerById/" + id, {withCredentials: true});
  }

}
