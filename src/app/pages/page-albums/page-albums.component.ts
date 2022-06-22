import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-page-albums',
  templateUrl: './page-albums.component.html',
  styleUrls: ['./page-albums.component.scss']
})
export class PageAlbumsComponent implements OnInit {

  albums$ = this.albumsService.albums$
  constructor(private albumsService: AlbumsService,) {

  }

  ngOnInit(): void {
  }

}
