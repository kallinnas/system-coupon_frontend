import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent{
  
  @Input()
  public imageSource: string;

  @Output()
  public imageClicked: EventEmitter<string> = new EventEmitter<string>();

  public imageHasBeenClicked(): void{
    this.imageClicked.emit(this.imageSource);
  }
}
