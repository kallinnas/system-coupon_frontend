import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Coupon } from 'src/app/models/coupons';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-ad-customer-details',
  templateUrl: './ad-customer-details.component.html',
  styleUrls: ['./ad-customer-details.component.css']
})
export class AdCustomerDetailsComponent implements OnInit {

  public role: string = localStorage.getItem("role");
  public customer: Customer = new Customer();
  public coupons: Coupon[] = this.customer.coupons;
  public customerId: number = parseFloat(localStorage.getItem("customerId"));


  public constructor(private adminS: AdminService,
    private aR: ActivatedRoute) { }


  public ngOnInit(): void {
    this.customerId = +this.aR.snapshot.params.id;
    localStorage.setItem("customer_id", this.customerId.toString());
    console.log(this.customerId);
    
    this.adminS.getCustomerByIdRest(this.customerId)
    .subscribe(c=>{
      this.customer = c;
    }, err=>{
      alert("Error: " + err.message);
    });

    this.adminS.getCustomerCouponsRest(this.customerId)
    .subscribe(c=>{
      this.coupons = c;
    }, err=>{
      alert("Error: " + err.message);
    });
    this.role = localStorage.getItem("role");
  }
  
  public deleteCustomerById():void{
    this.adminS.deleteCustomerRest(this.customerId)
    .subscribe(c=>{
      alert("Customer has been deleted!")
    })
  }

  public deleteCustomersCoupon(couponId: number) {
    this.adminS.deleteCustomersCouponRest(this.customerId, couponId)
    .subscribe(c=>{
      alert("Customer's coupon has been deleted!")
    }, err=>{
      alert("Error: " + err.message);
    });
  }

  public saveCouponID(id: number):void{
    localStorage.setItem("couponId", id.toString());
  }


}
