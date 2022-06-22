import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
id$ = this.route.paramMap.pipe(
map(params => params.get('id')));

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
