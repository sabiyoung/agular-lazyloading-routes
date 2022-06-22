import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photos$;
  constructor(
   private api:ApiService
  ) {
    this.photos$ = this.api.get<any[]>('photos')
  }
}
