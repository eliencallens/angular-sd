import { ActivatedRoute } from '@angular/router';
import { TodosService } from './../todos-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Todo } from '../todo';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-detail-page',
  templateUrl: './todo-detail-page.component.html',
  styleUrls: ['./todo-detail-page.component.scss']
})
export class TodoDetailPageComponent implements OnInit {
  id: number;
  todo$: Observable<Todo>;

  // localhost:4200/todos/1
  constructor(
    private todosService: TodosService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.todo$ = this.activatedRoute.paramMap.pipe(
      map(params => +params.get('id')),
      switchMap(id => this.todosService.get(id))
    );
  }
}

