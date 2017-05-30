import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {Todo} from "./todo.model";
import {TodoService} from "./todo.service";


@Injectable()
export class TodoResolveGuard implements Resolve<Todo> {

  constructor(
    private _todoService: TodoService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Todo> | boolean {
    let id = String(+route.params['id']);
    console.log(`TodoResolveGuard: ${id}`);

    return this._todoService.getTodo(id).then(todo => {
      if (todo) {
        return todo;
      }
      else { // id not found
        this.router.navigate(['/todos']);
        return false;
      }
    });
  }
}
