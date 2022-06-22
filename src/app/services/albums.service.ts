import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  albums$;
  constructor(
   private api:ApiService
  ) {
    this.albums$ = this.api.get<any[]>('albums')
  }
}
