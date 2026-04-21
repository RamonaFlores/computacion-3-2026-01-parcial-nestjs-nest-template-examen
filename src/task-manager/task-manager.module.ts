import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { TaskAssignmentsModule } from './task_assignments/task_assignments.module';

@Module({
  imports: [TaskModule, ProjectsModule, UsersModule, TaskAssignmentsModule]
})
export class TaskManagerModule {}
