import {Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-flyer',
  templateUrl: './flyer.component.html',
  styleUrls: ['./flyer.component.scss']
})
export class FlyerComponent {
  blockInfoArray = [
    {
      topper: '혁신적인 영어교육',
      inputText: 'Welcome to a new era of AI education',
      inputImgName: 'AIeducation.mp4',
    },
    {
      topper: '단 시간안에 창조하는 세계관',
      inputText: 'Unlock the power of instant creation',
      inputImgName: 'book2.mp4',
      isGray: true
    },
    {
      topper: 'Create with AI',
      inputText: 'Captivating visuals that brings stories to life',
      inputImgName: 'story-building.mp4'
    },
    {
      topper: '넓은 세계를 둘러보세요',
      inputText: 'Join our vibrant community, share, and discover new worlds',
      inputImgName: 'book-review.mp4',
      isGray: true
    },
    {
      topper: '영어 읽기 능력 향상',
      inputText: 'Ignite your reading skills with our AI-powered platform',
      inputImgName: 'quiz.mp4',
    },
    {
      topper: 'Are you ready?',
      inputText: 'Experience transformative reading like never before',
      inputImgName: 'walking.mp4',
      isGray: true
    }
  ]
}
