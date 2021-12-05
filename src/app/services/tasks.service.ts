import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiURL: string = 'http://localhost:8000/api/tasks';

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiURL, task, httpOptions);
  }

  completeTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task._id}`
    return this.http.put<Task>(url, task, httpOptions)
  }
}
