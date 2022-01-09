import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-taks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
