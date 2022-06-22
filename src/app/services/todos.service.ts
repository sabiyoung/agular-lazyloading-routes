import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos$;
  constructor(
   private api:ApiService
  ) {
    this.todos$ = this.api.get<any[]>('todos')
  }
}
