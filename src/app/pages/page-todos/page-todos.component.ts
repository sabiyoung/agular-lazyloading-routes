import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-page-todos',
  templateUrl: './page-todos.component.html',
  styleUrls: ['./page-todos.component.scss']
})
export class PageTodosComponent implements OnInit {

  todos$ = this.todosService.todos$
  constructor(private todosService: TodosService,) {

  }

  ngOnInit(): void {
  }

}
