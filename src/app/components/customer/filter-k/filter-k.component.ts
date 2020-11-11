import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-k',
  templateUrl: './filter-k.component.html',
  styleUrls: ['./filter-k.component.css']
})
export class FilterKComponent implements OnInit {

  public token: string = localStorage.getItem("token");
  public id: number;
  public endDate: Date;
  public title: string;
  public price: number;

  public constructor(
    private router: Router
  ) { }

  public getCouponById() {
    this.router.navigate(["/coupon-details/" 
    + this.id]);
  }

  public getCouponsByTitle() {
    localStorage.setItem("title", this.title);
    this.router.navigate(["/get-by-title"]);
  }

  public getCouponsByBelowPrice() {
    localStorage.setItem("price", this.price.toString());
    this.router.navigate(["/coupons-by-price"])
  }

  ngOnInit() { }


}