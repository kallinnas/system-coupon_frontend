import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/models/customer';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-update-customer',
  templateUrl: './ad-update-customer.component.html',
  styleUrls: ['./ad-update-customer.component.css']
})
export class AdUpdateCustomerComponent implements OnInit {

  public customer: Customer  = new Customer();

  public constructor(private adminS: AdminService,
    private router: Router) { }

  ngOnInit(): void {  }

  idFC = new FormControl(localStorage.getItem("customer_id"));
  firstNameFC = new FormControl('');
  lastNameFC = new FormControl('');

  customerFG = new FormGroup({
    id: this.idFC,
    firstName: this.firstNameFC,
    lastName: this.lastNameFC
  });

  public updateCustomer(){
    this.customer.id = this.idFC.value;
    this.customer.firstName = this.firstNameFC.value;
    this.customer.lastName = this.lastNameFC.value;

    this.adminS.updateCustomerRest(this.customer)
    .subscribe(c => {
      this.customer = c;
      alert("The Customer " + c.lastName + " was updated succesfully")
    }, err=>{
      alert("Error: " + err.message)
    });
  }


}
