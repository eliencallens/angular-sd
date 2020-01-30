import { DummyGuard } from './dummy.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TodoPageComponent } from './todos/todo-page/todo-page.component';
import { TodoDetailPageComponent } from './todos/todo-detail-page/todo-detail-page.component';

const routes: Routes = [
  {
    path: '', component: WelcomePageComponent
  },
  {
    path: 'todos',
    children: [
      { path: '', component: TodoPageComponent },
      { path: ':id', component: TodoDetailPageComponent, canActivate: [DummyGuard] }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
