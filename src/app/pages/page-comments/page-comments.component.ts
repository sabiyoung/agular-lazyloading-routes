import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-page-comments',
  templateUrl: './page-comments.component.html',
  styleUrls: ['./page-comments.component.scss']
})
export class PageCommentsComponent implements OnInit {

  comments$ = this.commentsService.comments$
  constructor(private commentsService: CommentsService,) {

  }

  ngOnInit(): void {
  }

}
