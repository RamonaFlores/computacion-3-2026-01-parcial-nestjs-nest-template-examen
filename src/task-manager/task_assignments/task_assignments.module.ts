import { Module } from '@nestjs/common';
import { TaskAssignmentsService } from './task_assignments.service';
import { TaskAssignmentsController } from './task_assignments.controller';

@Module({
  providers: [TaskAssignmentsService],
  controllers: [TaskAssignmentsController]
})
export class TaskAssignmentsModule {}
