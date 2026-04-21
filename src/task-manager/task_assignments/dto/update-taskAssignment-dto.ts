import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskAssignmentDto } from './create-taskAssignment-dto';

export class UpdateTaskAssignmentDto extends PartialType(CreateTaskAssignmentDto) {}
