import { Component, OnInit } from '@angular/core';
import {TodoService} from "../shared/todo.service";
import {Todo} from "../shared/todo.model"
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  providers: [TodoService],
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  public todos: Todo[];
  public selectedTodo = null;

  constructor(private _todoService: TodoService,
              private router: Router,
              private route: ActivatedRoute
  ) {}

  onSelect(todo) {
  }

  getTodos() {
    this._todoService.getTodos().then((todos: Todo[]) => this.todos = todos);
  }
  removeTodo(todo: Todo){
    this.todos.splice(this.todos.indexOf(todo), 1)
  }
  editTodo(todo: Todo) {
    //let link = ['newtoto/edit', todo.id];
    //this.router.navigate(link);
    // or
     let link = ['edit', todo.id];
     this.router.navigate(link, {relativeTo: this.route});
  }
  ngOnInit(): any {
    this.getTodos();
  }
}
