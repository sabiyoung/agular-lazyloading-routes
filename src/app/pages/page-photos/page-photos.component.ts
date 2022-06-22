import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-page-photos',
  templateUrl: './page-photos.component.html',
  styleUrls: ['./page-photos.component.scss']
})
export class PagePhotosComponent implements OnInit {

  photos$ = this.photosService.photos$
  constructor(private photosService: PhotosService,) {

  }

  ngOnInit(): void {
  }

}
