import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent {

  @Input() received!:{
    topper: string,
    inputText: string,
    inputImgName: string,
  }
  @Input() text!: string;
  @Input() imgName = ''
}
