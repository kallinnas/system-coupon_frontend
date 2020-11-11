import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Title } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  public companies: Company[];
  public role: string = localStorage.getItem("role");

  public constructor(private title: Title,
    private userS: UserService) { }

  public ngOnInit(): void {
    this.title.setTitle("Companies");

    this.userS.getAllCompaniesREST()
    .subscribe(c=>{
      this.companies = c;
    }, err=>{
      alert("Error: " + err.message);
    });

    this.role = localStorage.getItem("role");
  }

}
