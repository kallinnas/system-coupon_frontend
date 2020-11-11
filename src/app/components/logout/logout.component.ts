import { Component, AfterViewChecked, ChangeDetectorRef,  } from '@angular/core';
import { Router } from '@angular/router';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements AfterViewChecked {

  constructor(private cDR: ChangeDetectorRef,
    private modeSer: ModeService, private router: Router) { }

  public logout(): void {
    localStorage.removeItem("token");
    localStorage.setItem("role", this.modeSer.ROLE_USER);
    this.router.navigate(["/"]);
    
    this.modeSer.mode = this.modeSer.LOGGED_OUT;

    // Sets back <app-menu>
    this.modeSer.setUsersClientType();
    // Hides filter from unknown user
    // this.modeSer.mode = false;
  }

  ngAfterViewChecked() {  
    this.logout();
    this.cDR.detectChanges();
  }

}
