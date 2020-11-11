import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Coupon } from 'src/app/models/coupons';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.component.html',
  styleUrls: ['./company-account.component.css']
})
export class CompanyAccountComponent implements OnInit {
  public company: Company = new Company();
  public coupon: Coupon = new Coupon();
  public coupons: Coupon[] = [];


  constructor(private companyS: CompanyService) { }

  ngOnInit() {
    this.companyS.getSelfCompanyRest().subscribe(c => {
      this.company = c;
      localStorage.setItem("company_id", c.id.toString())
      this.getCompanyCoupons(c.id);
     }, err => {
       alert("Error:" + err.message)
    });

    
  }

  public saveCouponID(id: number):void{
    localStorage.setItem("coupon_id", id.toString());
    console.log(localStorage.getItem("coupon_id"));
  }

  public getCompanyCoupons(id: number):void{
    this.companyS.getAllCompanyCoupons(id)
    .subscribe(c => {
      this.coupons = c;      
      console.dir(this.coupons);
     }, err => {
      alert("Error:" + err.message)
    });
   
  }
  
  public delCoupon(id:number) {
    this.companyS.deleteCouponRest(id).subscribe(msg =>{
      alert("Coupon has been succesfully deleted!");
    }, err =>{
      console.log("Error:" + err.message);
    });
    
  }

  }

