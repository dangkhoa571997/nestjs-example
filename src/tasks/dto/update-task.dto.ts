import { CreateTaskDTO } from 'src/tasks/dto/create-task.dto';
import { TaskStatus } from 'src/tasks/tasks.types';

export class UpdateTaskDTO extends CreateTaskDTO {
  status: TaskStatus;
}
