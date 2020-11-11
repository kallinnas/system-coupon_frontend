import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cust-update',
  templateUrl: './cust-update.component.html',
  styleUrls: ['./cust-update.component.css']
})
export class CustUpdateComponent implements OnInit {

  public customer: Customer  = new Customer();

  public constructor(private customerS: CustomerService) { }

  ngOnInit(): void {
  }

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

    this.customerS.updateCustomerRest(this.customer)
    .subscribe(c => {
      console.log(this.customer);
      
      this.customer = c;
      alert("The Customer " + c.lastName + " was updated succesfully")
    }, err=>{
      alert("Error: " + err.message)
    });
  }


}
