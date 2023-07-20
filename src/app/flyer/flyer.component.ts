import {Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-flyer',
  templateUrl: './flyer.component.html',
  styleUrls: ['./flyer.component.scss']
})
export class FlyerComponent implements OnInit{
  secondBlockInfo = {
    topper: '혁신적인 영어교육',
    inputText: 'Welcome to a new era of AI education.',
    inputImgName: 'AIeducation.mp4',
    isVideo:true
  }

  thirdBlockInfo = {
    topper: '단 시간안에 창조하는 세계관',
    inputText: 'Unlock the power of instant creation.',
    inputImgName: 'book2.mp4',
    isVideo: true
  }

  inputArray:any[]= [
    {
    topper: '영어 읽기 능력 향상',
    inputText: 'Ignite your reading skills with our AI-powered platform.',
    inputImgName: 'img3.png',
    isMiddle: false
    },
    {
      topper: 'Create with AI',
      inputText: 'Captivating visuals that brings stories to life.',
      inputImgName: 'img4.png',
      isMiddle: true
    },
    {
      topper: '넓은 세계를 둘러보세요',
      inputText: `Join our vibrant community, share, and discover new worlds.`,
      inputImgName: 'img5.png',
      isMiddle: false
    },
  ]

  seventhBlockInfo = {
    topper: 'Are you ready?',
    inputText: 'Experience transformative reading like never before.',
    inputImgName: 'walking.mp4',
    isVideo: true,
    isLast: true
  }

  ngOnInit() {
    if(window.innerWidth<480) {
      this.inputArray[1].isMiddle = false
    }
  }
}
