import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {Router, ActivatedRoute} from "@angular/router";
import {Todo} from "../shared/todo.model";
import {TodoService} from "../shared/todo.service";
import {AuthService} from "../shared/auth.service";



@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  providers: [TodoService],
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit, OnDestroy {
  todo: Todo;
  oldTodo: Todo;
  newTodo: Todo;
  private isLogged: boolean;
  public editOption = false;



  constructor(
    private route: ActivatedRoute,
    private _todoService: TodoService,
    private _authService: AuthService,
    private _router: Router
  ) { }

  onSubmit() {
    this.newTodo.id = String(Math.random());
    this._todoService.insertTodo(this.newTodo);
    this._router.navigate(["/todos"])
  }
  onEdit(todo) {
    this._todoService.getTodos().then(todos => {
                                                  let index = todos.findIndex(item => item.id === todo.id);
                                                  todos[index] = todo
                                                  console.log(index)});
    this._router.navigate(["/todos"])
  }

  ngOnInit(): void {
    this.newTodo = {title: "", description: "", date: "", time:"", id: ""};
    this.isLogged = this._authService.isLoggedIn;
    this.route.data.forEach((data: { todo: Todo }) => {
      if(data.todo != undefined) {
        this.newTodo = Object.assign({}, data.todo);
        this.oldTodo = data.todo;
        if(Boolean(data.todo.id)){
          this.editOption = true;
        }else{
          this.editOption = false;
        }
        console.log("id = " + data.todo.id);
        console.log("this.editOption = " + this.editOption)
      }
    });
  }

  ngOnDestroy(): void {
  }

}
