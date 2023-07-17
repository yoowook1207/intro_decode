import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-flyer',
  templateUrl: './flyer.component.html',
  styleUrls: ['./flyer.component.scss']
})
export class FlyerComponent {
  inputArray= [
    {
      topper: '혁신적인 영어교육',
      inputText: 'Welcome to a new era of AI education.',
      inputImgName: 'decode2.png'
    },
    {
      topper: '단 시간안에 창조하는 세상(or세계관)',
      inputText: 'Unlock the power of instant creation  ',
      inputImgName: 'decode3.png'
    },
    {
      topper: '영어 읽기 능력 향상',
      inputText: 'Ignite your reading skills with our AI-powered platform.',
      inputImgName: 'decode4.png'
    },
    {
      topper: 'Create with AI',
      inputText: 'Captivating visuals that brings stories to life.',
      inputImgName: 'decode5.png'
    },
    {
      topper: '넓은 세계를 둘러보세요',
      inputText: 'Join our vibrant community, share, and discover new worlds.',
      inputImgName: 'decode6.png'
    },
    {
      topper: 'Are you ready?',
      inputText: 'Experience transformative reading like never before.',
      inputImgName: 'decode7.png'
    },
  ]
}
