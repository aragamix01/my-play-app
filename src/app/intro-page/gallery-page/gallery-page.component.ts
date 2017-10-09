import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  images: string[] = [
    'DSC_5346.jpg',
    'DSC09159.jpg',
    'DSC07093.jpg',
    'DSC06769.jpg',
    'DSC_5346.jpg',
    'DSC09247.jpg',
    'DSC03405.jpg'
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
