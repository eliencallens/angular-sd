import { TodosService } from './../todos-service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todos: Array<Todo>;

  constructor(private todosService: TodosService) {
    this.todos = this.todosService.todos;
  }
}
