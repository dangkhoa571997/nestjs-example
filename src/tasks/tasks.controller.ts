import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDTO } from 'src/tasks/dto/create-task.dto';
import { GetTasksFilterDTO } from 'src/tasks/dto/get-tasks-filter.dto';
import { UpdateTaskDTO } from 'src/tasks/dto/update-task.dto';
import { TasksService } from 'src/tasks/tasks.service';
import { Task } from 'src/tasks/tasks.types';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(@Query() filterParams?: GetTasksFilterDTO): Task[] {
    return this.tasksService.getAllTasks(filterParams);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskParams: CreateTaskDTO): Task {
    return this.tasksService.createTask(createTaskParams);
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
