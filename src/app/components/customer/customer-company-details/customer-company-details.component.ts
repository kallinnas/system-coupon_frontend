import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Coupon } from 'src/app/models/coupons';
import { ModeService } from 'src/app/services/mode.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-company-details',
  templateUrl: './customer-company-details.component.html',
  styleUrls: ['./customer-company-details.component.css']
})
export class CustomerCompanyDetailsComponent implements OnInit {

  public role: string = localStorage.getItem("role");
  public company: Company = new Company();
  public coupons: Coupon[] = this.company.coupons;
  public id: number = null;

  public constructor(private customerS: CustomerService,
    private mode: ModeService, private aR: ActivatedRoute) { }


  ngOnInit() {

    this.id = +this.aR.snapshot.params.id;

    this.customerS.getCompanyByIdRest(this.id)
    .subscribe(c => {
      this.company = c;
    }, err => {
      alert("Error: " + err.message);
    });

    this.customerS.getAllCompanyCoupons(this.id)
      .subscribe(c => {
      this.coupons = c;
      }, err => {
        alert("Error: " + err.message);
      });

  }

}
