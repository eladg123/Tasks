import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();  ///emit the event to the parent component for post the new task
  desc: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.desc) {
      alert("Please add a task")
    } else {
      const newTask = { desc: this.desc, done: false };
      this.onAddTask.emit(newTask);                  //// emit the new task to the parent component


    }
  }
}
