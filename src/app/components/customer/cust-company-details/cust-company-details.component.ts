import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Coupon } from 'src/app/models/coupons';
import { CustomerService } from 'src/app/services/customer.service';
import { ModeService } from 'src/app/services/mode.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cust-company-details',
  templateUrl: './cust-company-details.component.html',
  styleUrls: ['./cust-company-details.component.css']
})
export class CustCompanyDetailsComponent implements OnInit {

  public role: string = localStorage.getItem("role");
  public company: Company = new Company();
  public coupons: Coupon[] = this.company.coupons;
  public companyId: number;
  
  public constructor(private customerS: CustomerService,
    private mode: ModeService, private aR: ActivatedRoute) { }

  ngOnInit(): void {
    this.companyId = +this.aR.snapshot.params.id;
    localStorage.setItem("company_id", this.companyId.toString());
    console.log(this.companyId);
    
    this.customerS.getCompanyByIdRest(this.companyId)
    .subscribe(c => {
      this.company = c;
      this.coupons = c.coupons;
    }, err => {
      alert("Error: " + err.message);
    });
  }

}
