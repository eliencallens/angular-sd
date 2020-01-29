import { TodoListComponent } from './todo-list/todo-list.component';
import { NotDonePipe } from './not-done.pipe';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoForm2Component } from './todo-form2/todo-form2.component';

@NgModule({
  declarations: [NotDonePipe, TodoListComponent, TodoFormComponent, TodoForm2Component],
  exports: [TodoListComponent, TodoForm2Component],
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    FormsModule
  ]
})
export class TodosModule { }
