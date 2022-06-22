import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-page-users',
  templateUrl: './page-users.component.html',
  styleUrls: ['./page-users.component.scss']
})
export class PageUsersComponent implements OnInit {
users$ = this.usersService.users$
  constructor(
    private usersService: UsersService,

    ) {

  }

  ngOnInit(): void {
  }

}
