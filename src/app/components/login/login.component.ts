import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uName: string = '';
  password: string = '';

  constructor(private modeSer: ModeService, private router: Router,
    private logSer: LoginService) { }

  public login() {
    this.logSer.login(this.uName, this.password)
      .subscribe(token => {
        localStorage.setItem("token", token.token),
        this.router.navigate(["/home"]);
        console.log(localStorage.getItem("token"));
        
        // this.modeSer.mode = this.modeSer.LOGGED_IN; DELETE
        // Sets back menu in <nav>
        this.modeSer.setUsersClientType();
        })
    err => alert(err);
  }

  public loginReg(uName: string, password: string) {
    this.logSer.login(uName, password)
      .subscribe(token => {
        localStorage.setItem("token", token.token),
          console.log(token.token),
          this.router.navigate(["/home"])
      })
    err => alert(err)
  }

  public register(): void {
    this.router.navigate(["/registration"]);
  }



  public ngOnInit(): void {
  }

}
