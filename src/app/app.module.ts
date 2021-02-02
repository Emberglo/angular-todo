import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
// import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    //NOTE - Components go here (all components are TS files instead of JS)
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    HeaderComponent,
    // AddtodoComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    //NOTE - Modules (like HTTP Module) go here
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    //NOTE - Services you want to include
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
