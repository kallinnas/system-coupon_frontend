import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupons';
import { Title } from '@angular/platform-browser';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-c',
  templateUrl: './admin-c.component.html',
  styleUrls: ['./admin-c.component.css']
})
export class AdminCComponent implements OnInit {

  public coupons: Coupon[] = [];

  public constructor(private title: Title,
    private adminS: AdminService) { }

  public ngOnInit(): void {
    this.title.setTitle("Koupons");

    this.adminS.getAllCouponsRest()
      .subscribe(c => {
        this.coupons = c;
      }, err => {
        alert("Error: " + err.message);
      });
  }

  public saveCouponID(id: number):void{
    localStorage.setItem("coupon_d", id.toString());
  }

  public deleteCoupon(id: number) {
    this.adminS.deleteCouponRest(id)
      .subscribe(c => {
        alert("Coupon has been removed!")
      }, err => {
        alert("Error: " + err.message);
      });
  }


}


