import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupons';
import { CouponsService } from 'src/app/services/coupons.service';

@Component({
  selector: 'app-get-by-title',
  templateUrl: './get-by-title.component.html',
  styleUrls: ['./get-by-title.component.css']
})
export class GetByTitleComponent implements OnInit {

  public coupons: Coupon[];
  public title: string = localStorage.getItem("title");
  
  public constructor(private service: CouponsService) { }

  public ngOnInit():void{
    this.service.getCouponsByTitleRest(this.title)
    .subscribe(coupons => {
      setTimeout(() => {
        this.coupons = coupons;
      }, 1000);
    }, err => {
      alert("Error: " + err.message);
    });
  }

}
