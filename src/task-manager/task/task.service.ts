import { Injectable, NotFoundException } from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task-dto';
import { Repository } from 'typeorm';
import { Task} from '../entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {Project} from '../entities/project.entity';

@Injectable()
export class TaskService {
    constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>
    ){}


    async create(CreateTaskDto: CreateTaskDto): Promise<Task> {

        const project = await this.projectRepository.findOneBy({id: CreateTaskDto.projectId});

        if(!project) {
            throw new NotFoundException(`Session with id ${CreateTaskDto.projectId} not found`)
        }
        if (CreateTaskDto.parentTaskId != null){

            
            const parentTask = await this.taskRepository.findOneBy({id: CreateTaskDto.parentTaskId})
            if(!parentTask) {
                throw new NotFoundException(`Parent task with id ${CreateTaskDto.parentTaskId} not found`)
                
        }

        const task = this.taskRepository.create({
            title: CreateTaskDto.title,
            description: CreateTaskDto.description,
            status: CreateTaskDto.status,

            

        })
        }
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
