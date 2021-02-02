import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo-service.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  //NOTE - input is needed when importing todos in todo-list.component.html like [todo]="todo"
  @Input() todo: Todo
  //NOTE - output event by registering it with and event emitter so we can access it in the todoList - have to catch it in the todoList HTML then it can be accessed in todoList TS file
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  //NOTE - Set Dynamic Class Binding
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes
  }

  onToggle(todo) {
    //NOTE - sets completed to whatever it's not/toggles ui
    todo.completed = !todo.completed
    //NOTE - toggle in server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo))
  }

  onDelete(todo) {
    //NOTE - have to emit upwards to todoList - import eventemitter and output to do so
    this.deleteTodo.emit(todo)
  }


}
