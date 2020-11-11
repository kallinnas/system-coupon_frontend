import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Coupon } from '../models/coupons';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = 'http://localhost:8080/api/';
  private token: string = localStorage.getItem("token");

  constructor(private client: HttpClient) { }

  // GETTER'S FOR COMPANY
  public getCompanyByIdRest(id: number): Observable<Company> {
    return this.client.get<Company>(this.url + "company/" + this.token +
      "/getCompanyById/" + id, { withCredentials: true });
  }

  public getSelfCompanyRest(): Observable<Company> {
    return this.client.get<Company>(this.url + "company/" + this.token +
      "/getCompany", { withCredentials: true });
  }

  public getAllCompaniesRest(): Observable<Company[]> {
    return this.client.get<Company[]>(this.url + "company/" + this.token +
      "/getAllCompanies", { withCredentials: true });
  }



  // UPDATE FOR COMPANY
  public updateCompanyRest(company: Company): Observable<Company>{
    return this.client.put<Company>(this.url + "company/" +
     this.token + "/updateCompany", company, 
     {withCredentials: true});
  }






  // GETTER'S FOR COUPON
  public getAllCouponsRest(): Observable<Coupon[]> {
    return this.client.get<Coupon[]>(this.url + "company/" + this.token +
      "/getAllCoupons", { withCredentials: true });
  }

  public getAllCompanyCoupons(id: number): Observable<Coupon[]> {
    return this.client.get<Coupon[]>(this.url + "company/" + this.token +
      "/companyCoupons/" + id, { withCredentials: true });
  }


  

  // UPDATE FOR COUPON
  public updateCouponRest(coupon: Coupon): Observable<Coupon> {
    return this.client.put<Coupon>(this.url + "company/" + this.token +
      "/updateCoupon", coupon, { withCredentials: true });
  }

  public addCouponRest(coupon: Coupon): Observable<Coupon> {
    return this.client.post<Coupon>(this.url + "company/" + this.token +
      "/createCoupon", coupon, { withCredentials: true });
  }

  public deleteCouponRest(id: number): Observable<any> {
    return this.client.delete<Coupon>(this.url + "company/"
     + this.token + "/deleteCouponById/" + id, 
     { withCredentials: true });
  }


}
