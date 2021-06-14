import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from 'src/tasks/tasks.types';

export class GetTasksFilterDTO {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  keyword?: string;
}
