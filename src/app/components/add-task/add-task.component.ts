import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
