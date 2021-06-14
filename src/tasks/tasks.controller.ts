import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDTO } from 'src/tasks/dto/create-task.dto';
import { TasksService } from 'src/tasks/tasks.service';
import { Task } from 'src/tasks/tasks.types';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskParameter: CreateTaskDTO): Task {
    return this.tasksService.createTask(createTaskParameter);
  }
}
