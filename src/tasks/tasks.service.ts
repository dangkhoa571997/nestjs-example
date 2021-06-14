import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from 'src/tasks/dto/create-task.dto';
import { GetTasksFilterDTO } from 'src/tasks/dto/get-tasks-filter.dto';
import { UpdateTaskDTO } from 'src/tasks/dto/update-task.dto';
import { Task, TaskStatus } from 'src/tasks/tasks.types';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(filterParams?: GetTasksFilterDTO): Task[] {
    let tasks = this.tasks;
    if (filterParams && Object.keys(filterParams).length) {
      const { status, keyword } = filterParams;
      if (status) {
        tasks = tasks.filter((task) => task.status === status);
      }
      if (keyword) {
        tasks = tasks.filter((task) => {
          if (
            task.title.toLowerCase().includes(keyword) ||
            task.description.toLowerCase().includes(keyword)
          ) {
            return true;
          }
          return false;
        });
      }
    }
    return tasks;
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
    const foundTask = this.tasks.find((task) => task.id === id);
    if (!foundTask) throw new NotFoundException();

    return foundTask;
  }

  updateTask(id: string, taskParams: UpdateTaskDTO): Task {
    const task = this.getTaskById(id);
    Object.assign(task, taskParams);
    return task;
  }

  deleteTask(id: string): void {
    const foundTask = this.getTaskById(id);
    this.tasks = this.tasks.filter((task) => task.id !== foundTask.id);
  }
}
