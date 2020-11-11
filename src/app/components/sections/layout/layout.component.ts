import { Component, OnInit } from '@angular/core';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  private role: string = '';

  public constructor(public mode: ModeService) { }

  public ngOnInit() {
    this.role = this.mode.clientType;
    console.log(this.role);
  }

}
