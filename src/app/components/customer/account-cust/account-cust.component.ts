import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Coupon } from 'src/app/models/coupons';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-account-cust',
  templateUrl: './account-cust.component.html',
  styleUrls: ['./account-cust.component.css']
})
export class AccountCustComponent implements OnInit {

  public customer: Customer = new Customer();
  public coupons: Coupon[] = this.customer.coupons;
  public customerId: number = parseFloat(localStorage.getItem("customer_id"));

  public constructor(private customrS: CustomerService) { }

  ngOnInit(): void {
    this.customrS.getCustomersAccountRest()
    .subscribe(c=>{
      this.customer = c;
      this.coupons = c.coupons
      localStorage.setItem("customer_id", this.customer.id.toString());
    }, err =>{
      alert("Error: " + err.message);
    });
  }

  public deleteCustomer(){
    this.customrS.deleteCustomerRest(this.customerId)
    .subscribe(c=>{
      alert("Customer id: " + this.customerId + " has been deleted successfully!");
    }, err=>{
      alert("Error: " + err.message);
    });

  }

}
