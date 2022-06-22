import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts$;
  constructor(
   private api:ApiService
  ) {
    this.posts$ = this.api.get<any[]>('posts')
  }
}
