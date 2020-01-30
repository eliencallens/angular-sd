import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todos');
  }

  add(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:3000/todos', todo);
  }

  get(id: number): Observable<Todo> {
    return this.http.get<Todo>(`http://localhost:3000/todos/${id}`);
  }
}

export class MockTodosService {
  todos: Array<Todo> = [
    {
      name: 'Mock todo',
      budget: 0,
      dueDate: new Date('2020-02-02'),
      progress: 0.5,
      id: 0
    }
  ];

  getAll(): Observable<Todo[]> {
    return of(this.todos);
  }

  add(todo: Todo): Observable<Todo> {
    this.todos.push(todo);
    return of(todo);
  }

  get(id: number): Observable<Todo> {
    return of(this.todos[0]);
  }
}
