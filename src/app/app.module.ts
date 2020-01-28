import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/nl-BE';
import { NotDonePipe } from './todos/not-done.pipe';

registerLocaleData(locale);

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NotDonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'nl-BE'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
