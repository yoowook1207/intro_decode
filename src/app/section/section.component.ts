import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() received!:{
    topper: string,
    inputText: string,
    inputImgName: string,
    isGray?:boolean
  }
  @Input() text!: string;
  @Input() imgName = ''
}
