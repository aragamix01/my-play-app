import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

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
