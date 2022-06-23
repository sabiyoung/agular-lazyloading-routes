import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
id$ = this.route.paramMap.pipe(
map(params => params.get('id')));
user$ = this.usersService.getUser(this.id$);

  constructor(
    private route:ActivatedRoute,
    private usersService:UsersService
    ) { }

  ngOnInit(): void {
  }



}
