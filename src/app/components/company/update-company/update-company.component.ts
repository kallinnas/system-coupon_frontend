import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  Validation: boolean = true;

  public token: string = localStorage.getItem("token");
  public company = new Company();

  public constructor(private companyS: CompanyService,
    private aR: ActivatedRoute) { }

  ngOnInit() { }
  idFormControl = new FormControl(localStorage.getItem("company_id"));
  nameFormControl = new FormControl('');
  imageURLFormControl = new FormControl('');  

  myFormGroup = new FormGroup({
      id: this.idFormControl,
      name:this.nameFormControl,
      imageURL:this.imageURLFormControl,
    });

  public updateCompany() {
    this.company.id =this.idFormControl.value; 
    this.company.name =this.nameFormControl.value;  
    this.company.imageURL = this.imageURLFormControl.value;

     this.companyS.updateCompanyRest(this.company)
      .subscribe(c => {
      this.company = c;
      alert("The Company " + c.name + " was updated succesfully")
      }, err => {
        alert("Error: " + err.message);
      });

  }
}
