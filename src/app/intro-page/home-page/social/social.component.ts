import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {

  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '274196333086974',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }

}

