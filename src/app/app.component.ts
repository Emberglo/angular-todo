import { Component } from '@angular/core';

//NOTE - TypeScript Decoratator - includes metadata for component
@Component({
  //NOTE - used in selector (html element where to load)
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-todo-list';

  constructor() {

  }
}
