import { GelleryService } from './gallery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
  providers: [GelleryService]
})
export class GalleryPageComponent implements OnInit {
  images: any[] = [];
  constructor( private gelleryService: GelleryService ) { }

  ngOnInit() {
    this.images = this.gelleryService.getImages();
  }

}
