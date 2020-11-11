import { Component } from '@angular/core';
import { Coupon } from 'src/app/models/coupons';
import { CouponsService } from 'src/app/services/coupons.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent {

  token: string = localStorage.getItem("token");
  public coupon = new Coupon();

  // titleFC = new FormControl('', [Validators.minLength(3), Validators.maxLength(20), Validators.required]);
  // startDateFC = new FormControl('', [Validators.required]);
  // endDateFC = new FormControl('', [Validators.required]);
  // categoryFC = new FormControl('', [Validators.required]);
  // amountFC = new FormControl('', [Validators.required, Validators.min(1), Validators.min(1000)]);
  // priceFC = new FormControl('', [Validators.pattern('^[A-Z].*$') ]);
  // descriptionFC = new FormControl('', [Validators.minLength(3), Validators.maxLength(200), Validators.required]);
  // imageFC = new FormControl('', [Validators.required]);

  // couponFormGroup = new FormGroup({title: this.titleFC,
  //   startDate: this.startDateFC, endDate: this.endDateFC,
  //   category: this.categoryFC, amount: this.amountFC,
  //   price: this.priceFC, description: this.descriptionFC,
  //   image: this.imageFC})

  public constructor(private couponSer: CouponsService) { }

  public addCoupon(): void {

    // this.coupon.title = this.titleFC.value;
    // this.coupon.startDate = this.startDateFC.value;
    // this.coupon.endDate = this.endDateFC.value;
    // this.coupon.category = this.categoryFC.value;
    // this.coupon.amount = this.amountFC.value
    // this.coupon.price = this.priceFC.value;
    // this.coupon.description = this.descriptionFC.value;
    // this.coupon.imageURL = this.imageFC.value;

    this.couponSer.addCouponRest(this.token, this.coupon)
    .subscribe(c=>{alert("Coupon id#" + c.title
     + " was created successfully!")
    }, err=>{alert("Error: " + err.message);
  });
  }


  // ALERT F-TION
  // public addCouponAlert(): void {
  //   alert(`
  //   // Id: ${ this.coupon.id}
  //   Title: ${ this.coupon.title}
  //   StartDate: ${ this.coupon.startDate}
  //   EndDate: ${ this.coupon.endDate}
  //   Category: ${ this.coupon.category}
  //   Amount: ${ this.coupon.amount}
  //   Price: ${ this.coupon.price}
  //   Description: ${ this.coupon.description}
  //   Image: ${ this.coupon.imageURL}
  //   `);
  // }

}
