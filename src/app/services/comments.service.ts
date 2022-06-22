import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments$;
  constructor(
   private api:ApiService
  ) {
    this.comments$ = this.api.get<any[]>('comments')
  }
}
