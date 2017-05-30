import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { TodoService } from './shared/todo.service';
import { routing } from  './app.routing';
import { HeaderComponent } from './header.component';
import { LoginComponent } from './login/login.component'
import {AuthService} from "./shared/auth.service";
import {AuthGuard} from "./shared/auth.guard";
import {TodoResolveGuard} from "./shared/todo-resolve.guard";



@NgModule({
  declarations: [
    AppComponent,
    NewTodoComponent,
    TodoListComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    TodoService,
    AuthService,
    AuthGuard,
    TodoResolveGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
