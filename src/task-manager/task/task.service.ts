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


    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        const project = await this.projectRepository.findOneBy({ id: createTaskDto.projectId });

        if (!project) {
            throw new NotFoundException(`Project with id ${createTaskDto.projectId} not found`);
        }

        let parentTask: Task | null = null;
        if (createTaskDto.parentTaskId != null) {
            parentTask = await this.taskRepository.findOneBy({ id: createTaskDto.parentTaskId });
            if (!parentTask) {
                throw new NotFoundException(`Parent task with id ${createTaskDto.parentTaskId} not found`);
            }
        }

        const task = this.taskRepository.create({
            title: createTaskDto.title,
            description: createTaskDto.description,
            status: createTaskDto.status,
            project,
            parentTask: parentTask ?? undefined,
        });

        return this.taskRepository.save(task);
    }
}
    
