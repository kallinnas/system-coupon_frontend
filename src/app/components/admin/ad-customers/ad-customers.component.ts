import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Title } from '@angular/platform-browser';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-ad-customers',
  templateUrl: './ad-customers.component.html',
  styleUrls: ['./ad-customers.component.css']
})
export class AdCustomersComponent implements OnInit {

  public customers: Customer[];

  public constructor(private title: Title,
    private adminS: AdminService) { }

  public ngOnInit(): void {
    this.title.setTitle("Customers");

    this.adminS.getAllCustomersRest()
      .subscribe(c => {
      this.customers = c;
      console.log(c);
      
      }, err => {
        alert("Error: " + err.message);
      })
  }

}
