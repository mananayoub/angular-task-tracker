import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService ) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => this.tasks = tasks);
  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((t) => t.id !== task.id));
  }
  onToggleTaskReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.onToggleReminderUpdate(task).subscribe();
  }
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
