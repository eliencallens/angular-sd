import { Observable, Subject, merge, combineLatest, Subscribable, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos-service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  todos$: Observable<Todo[]>;
  newTodos$ = new Subject<Todo[]>();

  constructor(private todosService: TodosService) { }
  todos: Todo[];

  ngOnInit(): void {
    this.todos$ = merge(this.todosService.getAll(), this.newTodos$);
  }

  saveTodo(todo: Todo) {
    combineLatest(this.todos$, this.todosService.add(todo))
      .pipe(
        map(([todos, newTodo]) => {
          todos.push(newTodo);
          return todos;
        }),
        takeUntil(this.newTodos$)
      ).subscribe((todos) => this.newTodos$.next(todos));
  }
}
