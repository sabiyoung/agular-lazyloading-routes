import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-page-posts',
  templateUrl: './page-posts.component.html',
  styleUrls: ['./page-posts.component.scss']
})
export class PagePostsComponent implements OnInit {

  posts$ = this.postsService.posts$
  constructor(private postsService: PostsService,) {

  }

  ngOnInit(): void {
  }

}
