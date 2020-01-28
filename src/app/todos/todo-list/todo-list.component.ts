import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { of } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todos: Array<Todo> = [
    {
      name: 'Clean house',
      budget: 0,
      dueDate: new Date('2020-02-02'),
      progress: 0.5
    },
    {
      name: 'Refuel car',
      budget: 50,
      dueDate: new Date('2020-02-02'),
      progress: 0
    },
    {
      name: 'Mow lawn',
      budget: 0,
      dueDate: new Date('2019-08-03'),
      progress: 1
    }
  ];
}
