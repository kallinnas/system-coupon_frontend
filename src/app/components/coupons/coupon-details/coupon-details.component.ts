import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupons';
import { ActivatedRoute, Router } from '@angular/router';
import { CouponsService } from 'src/app/services/coupons.service';


@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.component.html',
  styleUrls: ['./coupon-details.component.css']
})

export class CouponDetailsComponent implements OnInit {

  public coupon: Coupon;
  public role: string = '';

  public constructor(private aR: ActivatedRoute,
    private couponsSer: CouponsService) { }

  
  public ngOnInit() {
    this.role = localStorage.getItem("role");
    let id = +this.aR.snapshot.params.id;    
    this.couponsSer.getCouponByIdRest(id)
        .subscribe(coupon => {
          this.coupon = coupon;
        }, err => {
          alert(this.aR.snapshot.params.id);
        });
  }

  public buyCoupon():void{
    console.log(this.coupon.id);
    this.couponsSer.buyCoupon(this.coupon.id)
    .subscribe(coupon=>{
      this.coupon = coupon;
    }, err=>{alert(err.message)});
  }



}
