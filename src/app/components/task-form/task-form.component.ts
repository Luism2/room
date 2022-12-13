import { Component, OnInit, Output, EventEmitter } from '@angular/core';import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  title: string;
  description: string;

    dia:string;
    edificio:string;
    hora:string;
    hide: boolean;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  addTask(newTitle: HTMLInputElement, newDescription: HTMLInputElement,newDia: HTMLInputElement,newEdificio:HTMLInputElement,newHora:HTMLInputElement) {
    this.taskService.addTask({
      title: newTitle.value,
      description: newDescription.value,
      dia:newDia.value,
      edificio:newEdificio.value,
      hora:newHora.value,
      hide: true
    });
    newTitle.value = '';
    newDescription.value = '';
    newDia.value='';
    newEdificio.value='';
    newHora.value='';
    return false;
  }

}
