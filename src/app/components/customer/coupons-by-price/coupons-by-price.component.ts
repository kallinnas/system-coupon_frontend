import { Component, OnInit } from '@angular/core';
import { CouponsService } from 'src/app/services/coupons.service';
import { Coupon } from 'src/app/models/coupons';

@Component({
  selector: 'app-coupons-by-price',
  templateUrl: './coupons-by-price.component.html',
  styleUrls: ['./coupons-by-price.component.css']
})
export class CouponsByPriceComponent implements OnInit {

  public coupons: Coupon[];
  price: number = parseFloat(localStorage.getItem("price"));

  public constructor(private couponsSer: CouponsService) { }

  public ngOnInit(): void {
    this.couponsSer.getCouponsByBelowPrice(this.price)
      .subscribe(coupons => {
        this.coupons = coupons;
        localStorage.removeItem("price");
      }, err => {
        alert("Error: " + err.message);
      });
  }


}
