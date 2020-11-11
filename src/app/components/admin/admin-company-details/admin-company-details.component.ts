import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/models/coupons';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-company-details',
  templateUrl: './admin-company-details.component.html',
  styleUrls: ['./admin-company-details.component.css']
})
export class AdminCompanyDetailsComponent implements OnInit {

  public role: string = localStorage.getItem("role");
  public company: Company = new Company();
  public coupons: Coupon[] = this.company.coupons;
  public companyId: number = parseFloat(localStorage.getItem("company_id"));

  public constructor(private adminS: AdminService,
    private aR: ActivatedRoute) { }

  ngOnInit() {
    this.companyId = +this.aR.snapshot.params.id;
    localStorage.setItem("company_id", this.companyId.toString());
    this.adminS.getCompanyByIdRest(this.companyId)
      .subscribe(c => {
        this.company = c;
        this.coupons =c.coupons;
      }, err => {
        alert("Error: " + err.message);
      });

    // this.adminS.getCompanyCouponsRest(this.companyId)
    //   .subscribe(c => {
    //     this.coupons = c;
    //   }, err => {
    //     alert("Error: " + err.message);
    //   });

    this.role = localStorage.getItem("role");
  }

  public deleteCoupon(id: number): void {
    console.log(id);
    this.adminS.deleteCouponRest(id)
      .subscribe(c => {
        alert("Coupon " + id + " has been deleted successfully!")
      }, err=>{alert("Error: " + err.message);
      })
  }

  public saveCouponID(id: number):void{
    localStorage.setItem("couponId", id.toString());
  }

  public deleteCompany(): void {
    console.log(this.companyId);

    this.adminS.deleteCompany(this.companyId)
      .subscribe(c => {
        alert(c);
        alert("Company " + this.companyId + " has been deleted successfully!")
      })
  }


}
