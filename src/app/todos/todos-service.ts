import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
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

  getAll(): Array<Todo> {
    return this.todos;
  }

  add(todo: Todo) {
    this.todos.push(todo);
  }
}

export class MockTodosService {
  todos: Array<Todo> = [
    {
      name: 'Mock todo',
      budget: 0,
      dueDate: new Date('2020-02-02'),
      progress: 0.5
    }
  ];

  getAll(): Array<Todo> {
    return this.todos;
  }

  add(todo: Todo) {
    this.todos.push(todo);
  }
}
