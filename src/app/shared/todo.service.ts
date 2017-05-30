import  {Injectable} from "@angular/core"
import {TODOS} from "./mock-todo";
import {Todo} from "./todo.model";

@Injectable()
export class TodoService {
  getTodos() {
    return Promise.resolve(TODOS);
  }
  getTodo(id: string) {
    return this.getTodos()
      .then(todos => todos.find(todo => todo.id === id));
  }
  insertTodo(todo: Todo) {
    Promise.resolve(TODOS).then((todos: Todo[]) => todos.push(todo));
  }
}
