import {Component, Input} from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-mobile-block',
  templateUrl: './mobile-block.component.html',
  styleUrls: ['./mobile-block.component.scss']
})
export class MobileBlockComponent {
  @Input() blockInfo!:{
    topper: string,
    inputText: string,
    inputImgName: string,
    isMiddle:boolean
  }
}
