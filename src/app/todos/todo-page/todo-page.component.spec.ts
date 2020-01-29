import { TodoForm2Component } from './../todo-form2/todo-form2.component';
import { TodoListComponent } from './../todo-list/todo-list.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TodoPageComponent } from './todo-page.component';
import { FormsModule } from '@angular/forms';
import { NotDonePipe } from '../not-done.pipe';


describe('TodoPageComponent', () => {
  let todoPageComponentFixture: ComponentFixture<TodoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoPageComponent,
        TodoListComponent,
        TodoForm2Component,
        NotDonePipe
      ],
      imports: [FormsModule]
    }).compileComponents();

    todoPageComponentFixture = TestBed.createComponent(TodoPageComponent);
  });

  it('should create', () => {
    expect(todoPageComponentFixture).toBeTruthy();
  });


});
