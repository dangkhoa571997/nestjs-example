import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskDTO } from 'src/tasks/dto/create-task.dto';
import { UpdateTaskDTO } from 'src/tasks/dto/update-task.dto';
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
  createTask(@Body() createTaskParams: CreateTaskDTO): Task {
    return this.tasksService.createTask(createTaskParams);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Patch('/:id')
  updateTask(
    @Param('id') id: string,
    @Body() updateParams: UpdateTaskDTO,
  ): Task {
    return this.tasksService.updateTask(id, updateParams);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }
}
