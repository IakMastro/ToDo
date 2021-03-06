import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.sass']
})
export class ToDoComponent implements OnInit {
  tasks: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  add(task: string): void {
    task = task.trim()

    if (!task) return;

    this.tasks.push(task)
  }
}
