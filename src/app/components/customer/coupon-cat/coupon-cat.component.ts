import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupons';
import { CouponsService } from 'src/app/services/coupons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coupon-cat',
  templateUrl: './coupon-cat.component.html',
  styleUrls: ['./coupon-cat.component.css']
})
export class CouponCatComponent implements OnInit {
  public coupons: Coupon[] = [];
  token: string = localStorage.getItem("token");

  constructor(private couponsSer: CouponsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let category = +this.activatedRoute.snapshot.params.category;
    this.couponsSer.getCouponsByCategoryRest(category).subscribe(coupons => {
      this.coupons = coupons;
      console.dir(this.coupons);
    }, err => {
      alert("Error: " + err.message);
    });

  }
}
