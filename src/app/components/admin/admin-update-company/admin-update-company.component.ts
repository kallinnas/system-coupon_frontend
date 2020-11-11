import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-update-company',
  templateUrl: './admin-update-company.component.html',
  styleUrls: ['./admin-update-company.component.css']
})
export class AdminUpdateCompanyComponent implements OnInit {

  // Validation: boolean = true;

  public company = new Company();

  public constructor(private adminS: AdminService,
    private aR: ActivatedRoute) { }

  ngOnInit() { }

  idFC = new FormControl(localStorage.getItem("company_id"));
  nameFC = new FormControl('');
  imageURLFC = new FormControl('');  

  myFormGroup = new FormGroup({
      id: this.idFC,
      name:this.nameFC,
      imageURL:this.imageURLFC,
    });

  public updateCompany() {
    this.company.id =this.idFC.value; 
    this.company.name =this.nameFC.value;  
    this.company.imageURL = this.imageURLFC.value;

    this.adminS.updateCompanyRest(this.company)
    .subscribe(c => {
    this.company = c;
    alert("The Company " + c.name + " was updated succesfully")
    }, err => {
      alert("Error: " + err.message);
    });

  }
}
