import { TodoListComponent } from './todo-list/todo-list.component';
import { NotDonePipe } from './not-done.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NotDonePipe, TodoListComponent],
  exports: [TodoListComponent],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
