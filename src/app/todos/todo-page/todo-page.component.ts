import { TodoListComponent } from './../todo-list/todo-list.component';
import { Component, ViewChild } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent {

  @ViewChild(TodoListComponent, { static: false })
  todoListComponent: TodoListComponent;

  saveTodo(todo: Todo) {
    this.todoListComponent.todos.push(todo);
    this.todoListComponent.todos = this.todoListComponent.todos.slice();
  }
}
