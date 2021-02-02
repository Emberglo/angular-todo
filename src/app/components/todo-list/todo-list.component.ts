import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo-service.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[];

  constructor(private todoService:TodoService) {
    //NOTE - mostly used to import services
  }

  ngOnInit() {
    //NOTE - have to subscribe to the observable (like async/await) (like .then)
    this.todoService.getTodos().subscribe(todos => this.todoList = todos)
  }

  deleteTodo(todo: Todo) {
    //NOTE - remove todo from list in ui
    this.todoList = this.todoList.filter(t => t.id !== todo.id)
    //NOTE - remove todo from server
    this.todoService.deleteTodo(todo).subscribe()
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => this.todoList.push(todo))
  }

}
