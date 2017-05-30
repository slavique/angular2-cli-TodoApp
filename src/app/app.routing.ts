import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule, Route } from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {NewTodoComponent} from "./new-todo/new-todo.component";
import {LoginComponent} from "./login/login.component";
import {AuthService} from "./shared/auth.service";
import {AuthGuard} from "./shared/auth.guard";
import {TodoResolveGuard} from "./shared/todo-resolve.guard";



const indexRoute: Route =
{
  path: '',
  component: TodoListComponent
};
const fallbackRoute: Route =
{
  path: '**',
  component: TodoListComponent
};

const APP_ROUTES: Routes = [
  { path: '',
    children: [
      {
        path: '',
        component: TodoListComponent
      },
      {
        path: 'edit/:id',
        component: NewTodoComponent,
        resolve: {
          todo: TodoResolveGuard
        }
      }
    ]
  },
  {path: 'todos', component: TodoListComponent},
  {path: 'newtodo', component: NewTodoComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {
    path: 'about',
    canLoad: [AuthGuard],
    loadChildren: () => new Promise(resolve => {
      (require as any).ensure([], require => {
        resolve(require('./about/about.module').AboutModule);
      })
    })
  },
  indexRoute,
  fallbackRoute
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
