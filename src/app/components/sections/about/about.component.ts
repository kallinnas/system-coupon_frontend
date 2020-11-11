import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public amount: number;
  public imageDate: Date;
  public imageWidth: number;
  public isWinter: boolean;
  public sites = ["geeksforgeeks.org", "html5css.ru", "stackoverflow.com"]
  
  public constructor(private title: Title) { }

  public ngOnInit(): void {
    this.title.setTitle("About Us")
    this.amount = 1;
    this.imageDate = new Date();
    this.imageWidth = 200;
    const month = new Date().getMonth()+1;
    this.isWinter = month >= 3 || month <= 11;
  }

  public eventBindingFun(): void{
    alert("Serhii Kalinichenko");
  }

  public imageDecr(): void{
    this.imageWidth -= 10;
  }

  public imageIncr(): void{
    this.imageWidth += 10;
  }

  public imageRes(): void{
    this.imageWidth = 210;
  }

  

}
