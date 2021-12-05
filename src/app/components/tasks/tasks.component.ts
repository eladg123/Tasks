import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../../Task'
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];



  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasks() /// bring all the tasks at the initiallize
      .subscribe(data => {
        this.tasks = data
      });
  }
  completeTask(task: Task) {
    let updatedTask = { desc: task.desc, _id: task._id, done: true }
    this.tasksService.completeTask(updatedTask).subscribe();
    this.tasksService.getTasks().subscribe(data => this.tasks = data)
  }

  createTask(task: Task) {         /// use the create function from the service to create task
    this.tasksService.createTask(task).subscribe(task => this.tasks.push(task));
  }
}
