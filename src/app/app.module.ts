import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

// Service
import { TaskService } from './services/task.service';
import { TaskLoginComponent } from './components/task-login/task-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TasksListComponent,
    TaskComponent,
    TaskFormComponent,
    TaskLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
