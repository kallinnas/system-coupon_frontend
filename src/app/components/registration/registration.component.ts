import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ModeService } from 'src/app/services/mode.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  uName: string = '';
  password: string = '';

  public constructor(private logSer: LoginService, 
    private modeSer: ModeService, private router: Router) { }

  public regCustomer() {
    this.logSer.regNewUser(this.uName, this.password, 1)
      .subscribe(token => {
        localStorage.setItem("token", token.token),
        this.router.navigate(["/about"]);

        this.modeSer.mode = this.modeSer.LOGGED_IN;

        // Sets specific menu in <nav>
        this.modeSer.setUsersClientType();
        console.log("New customer: " + this.uName);
      })
    err => alert(err);
  }

  public regCompany() {
    this.logSer.regNewUser(this.uName, this.password, 2)
      .subscribe(token => {
        localStorage.setItem("token", token.token),
        this.router.navigate(["/about"]);

        this.modeSer.mode = this.modeSer.LOGGED_IN;

        // Sets specific menu in <nav>
        this.modeSer.setUsersClientType();
        console.log("New customer" + this.uName);
      })
    err => alert(err);
  }

  public ngOnInit(): void {
  }

}
