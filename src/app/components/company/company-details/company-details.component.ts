import { Component, OnInit } from '@angular/core';
import { ModeService } from 'src/app/services/mode.service';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { Coupon } from 'src/app/models/coupons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  public role: string = localStorage.getItem("role");
  public company: Company = new Company();
  public coupons: Coupon[] = this.company.coupons;
  public id: number = null;

  public constructor(private companyS: CompanyService,
    private mode: ModeService, private aR: ActivatedRoute) { }


  ngOnInit() {

    this.id = +this.aR.snapshot.params.id;

    this.companyS.getCompanyByIdRest(this.id)
    .subscribe(c => {
      this.company = c;
    }, err => {
      alert("Error: " + err.message);
    });

    this.companyS.getAllCompanyCoupons(this.id)
      .subscribe(c => {
      this.coupons = c;
      }, err => {
        alert("Error: " + err.message);
      });

  }

}
