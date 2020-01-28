import { TodoListComponent } from './todo-list/todo-list.component';
import { NotDonePipe } from './not-done.pipe';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [NotDonePipe, TodoListComponent, TodoFormComponent],
  exports: [TodoListComponent, TodoFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ]
})
export class TodosModule { }
