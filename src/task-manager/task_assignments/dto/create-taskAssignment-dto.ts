import { IsInt, Min } from 'class-validator';

export class CreateTaskAssignmentDto {
    @IsInt()
    @Min(1)
    userId: number;

    @IsInt()
    @Min(1)
    taskId: number;
}