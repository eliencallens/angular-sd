import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Todo } from '../todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      name: ['Todo', [Validators.required, Validators.minLength(3)]],
      dueDate: ['2021-01-01', [Validators.required]],
      budget: [0, [Validators.min(0)]]
    });

    // this.todoForm = new FormGroup({
    //   name: new FormControl('Todo', [Validators.required, Validators.minLength(3)]),
    //   dueDate: new FormControl('2021-01-01', [Validators.required]),
    //   budget: new FormControl(0, [Validators.min(0)])
    // });
  }

  save(): void {
    const newTodo = new Todo();
    newTodo.budget = this.todoForm.get('budget').value;
    newTodo.name = this.todoForm.get('name').value;
    newTodo.dueDate = this.todoForm.get('dueDate').value;
    newTodo.progress = 0;
    console.log(newTodo);
  }
}



