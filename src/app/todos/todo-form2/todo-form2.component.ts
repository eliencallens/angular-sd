import { TodosService } from './../todos-service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form2',
  templateUrl: './todo-form2.component.html',
  styleUrls: ['./todo-form2.component.scss']
})
export class TodoForm2Component {
  @Output() saveTodo = new EventEmitter();

  constructor() { }

  name = 'Todo';
  dueDate: Date;
  budget: number;

  save() {
    const todo = new Todo();
    todo.name = this.name;
    todo.dueDate = this.dueDate;
    todo.budget = this.budget;
    todo.progress = 0;
    this.saveTodo.emit(todo);
  }
}
