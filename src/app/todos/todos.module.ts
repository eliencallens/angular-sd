import { AppRoutingModule } from './../app-routing.module';
import { ZoomDirective } from './zoom.directive';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NotDonePipe } from './not-done.pipe';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoForm2Component } from './todo-form2/todo-form2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoDetailPageComponent } from './todo-detail-page/todo-detail-page.component';


@NgModule({
  declarations: [
    NotDonePipe,
    TodoListComponent,
    TodoFormComponent,
    TodoForm2Component,
    TodoPageComponent,
    ZoomDirective,
    TodoDetailPageComponent
  ],
  exports: [TodoPageComponent],
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ]
})
export class TodosModule { }
