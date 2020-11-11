import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupons';
import { Title } from '@angular/platform-browser';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-c',
  templateUrl: './company-c.component.html',
  styleUrls: ['./company-c.component.css']
})
export class CompanyCComponent implements OnInit {

  public coupons: Coupon[] = [];

  public constructor(private title: Title,
    private companyS: CompanyService) { }

  public ngOnInit():void {
    this.title.setTitle("Koupons");

    this.companyS.getAllCouponsRest()
      .subscribe(c => {
      this.coupons = c;
      }, err => {
        alert("Error: " + err.message);
      })
  }

}
