import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskUrl = 'http://localhost:5114/api/tasks'; 

  constructor(private http: HttpClient) {}

  // Get all tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl);
  }

  // Get a task by ID
  getTaskById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.taskUrl}/${id}`);
  }

  // Create a new task
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.taskUrl, task);
  }

  // Update a task
  updateTask(id: string, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.taskUrl}/${id}`, task);
  }

  // Delete a task
  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.taskUrl}/${id}`);
  }
}
