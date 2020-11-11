import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupons';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-ad-update-coupon',
  templateUrl: './ad-update-coupon.component.html',
  styleUrls: ['./ad-update-coupon.component.css']
})
export class AdUpdateCouponComponent implements OnInit {

  public coupon: Coupon = new Coupon();

  constructor(private adminS: AdminService) { }

  ngOnInit() {}
  
  idFC = new FormControl(localStorage.getItem("coupon_id"));
  companyIdFC = new FormControl(localStorage.getItem("company_id"));
  titleFC = new FormControl('');
  startDateFC = new FormControl('');
  endDateFC = new FormControl('');
  categoryFC = new FormControl('');
  amountFC = new FormControl('');
  descriptionFC = new FormControl('');
  priceFC = new FormControl('');
  imageURLFC = new FormControl('');

  myFormGroup = new FormGroup(
    {
      id: this.idFC,
      companyId: this.companyIdFC,
      title: this.titleFC,
      startDate: this.startDateFC,
      endDate: this.endDateFC,
      category: this.categoryFC,
      amount: this.amountFC,
      description: this.descriptionFC,
      price: this.priceFC,
      imageURL: this.imageURLFC,
    });

  public updateCoupon() {
    
    this.coupon.id = this.idFC.value;
    this.coupon.companyId = this.companyIdFC.value;
    this.coupon.title = this.titleFC.value;
    this.coupon.startDate = this.startDateFC.value;
    this.coupon.endDate = this.endDateFC.value;
    this.coupon.category = this.categoryFC.value;
    this.coupon.amount = this.amountFC.value;
    this.coupon.description = this.descriptionFC.value;
    this.coupon.price = this.priceFC.value;
    this.coupon.imageURL = this.imageURLFC.value;
    
    this.adminS.updateCouponRest(this.coupon)
    .subscribe(c => {
      this.coupon = c;
      alert("The Coupon " + c.title + " was updated succesfully")
    }, err => {
      console.log("Error: " + err.message);
    });
  }
}
