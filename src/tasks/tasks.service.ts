import { Injectable } from '@nestjs/common';
import { CreateTaskDTO } from 'src/tasks/dto/create-task.dto';
import { UpdateTaskDTO } from 'src/tasks/dto/update-task.dto';
import { Task, TaskStatus } from 'src/tasks/tasks.types';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(taskParams: CreateTaskDTO): Task {
    const { title, description } = taskParams;
    const newTask: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id: string, taskParams: UpdateTaskDTO): Task {
    const task = this.getTaskById(id);
    Object.assign(task, taskParams);
    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
