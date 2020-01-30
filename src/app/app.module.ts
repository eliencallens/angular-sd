import { DummyGuard } from './dummy.guard';
import { AppRoutingModule } from './app-routing.module';
import { TodoPageComponent } from './todos/todo-page/todo-page.component';
import { LogHttpInterceptor } from './todos/log-http-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodosService, MockTodosService } from './todos/todos-service';
import { TodosModule } from './todos/todos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/nl-BE';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

registerLocaleData(locale);

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    TodosModule,
    FormsModule,
    // ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'nl-BE'
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LogHttpInterceptor,
    multi: true
  },
    TodosService,
    DummyGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
