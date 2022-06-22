import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
users$;
  constructor(
   private api:ApiService
  ) {
    this.users$ = this.api.get<any[]>('users')
  }
}
