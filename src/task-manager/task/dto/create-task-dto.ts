import { IsInt, IsNotEmpty, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(120)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(1000)
    description: string;

    @IsInt()
    @Min(1)
    @Max(3)
    status: number;

    @IsInt()
    @Min(1)
    @IsOptional()
    parentTaskId?: number;

    @IsInt()
    @Min(1)
    @IsOptional()
    projectId: number;
}