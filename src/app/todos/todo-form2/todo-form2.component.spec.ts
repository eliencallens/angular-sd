import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoForm2Component } from './todo-form2.component';
import { FormsModule } from '@angular/forms';

describe('TodoForm2Component', () => {
  let component: TodoForm2Component;
  let fixture: ComponentFixture<TodoForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoForm2Component],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
