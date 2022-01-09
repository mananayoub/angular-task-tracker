import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-taks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTask(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
  constructor() { }
}
