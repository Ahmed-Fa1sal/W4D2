import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';
import * as TaskActions from './state/task.actions';
import { AppState } from './state/app.state';  // Import the AppState interface
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[CommonModule, HttpClientJsonpModule]
})
export class AppComponent implements OnInit {
  title = 'Task Management System';
  tasks$: Observable<Task[]>;

  constructor(private store: Store<AppState>) {  // Use the AppState type here
    this.tasks$ = this.store.select(state => state.tasks);
  }

  ngOnInit(): void {
    this.store.dispatch(TaskActions.loadTasks());
  }

  deleteTask(id: string): void {
    this.store.dispatch(TaskActions.deleteTask({ taskId: id }));
  }

  toggleComplete(task: Task): void {
    const updatedTask = { ...task, completed: !task.completed };
    this.store.dispatch(TaskActions.updateTask({ task: updatedTask }));
  }
}
