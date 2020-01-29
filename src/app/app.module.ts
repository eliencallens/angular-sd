import { TodosModule } from './todos/todos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/nl-BE';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


registerLocaleData(locale);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodosModule,
    FormsModule,
    // ReactiveFormsModule,
    NgbModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'nl-BE'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
