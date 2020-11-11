import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupons';
import { Title } from '@angular/platform-browser';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-c',
  templateUrl: './customer-c.component.html',
  styleUrls: ['./customer-c.component.css']
})
export class CustomerCComponent implements OnInit {

  public coupons: Coupon[] = [];

  public constructor(private title: Title,
    private customerS: CustomerService) { }

  public ngOnInit(): void {
    this.title.setTitle("Koupons");

    this.customerS.getAllCouponsRest()
      .subscribe(coupons => {
      this.coupons = coupons;
      }, err => {
        alert("Error: " + err.message);
      })
  }

}
