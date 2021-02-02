import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    //NOTE - Components go here (all components are TS files instead of JS)
    AppComponent,
    TodoListComponent
  ],
  imports: [
    //NOTE - Modules (like HTTP Module) go here
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //NOTE - Services you want to include
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
