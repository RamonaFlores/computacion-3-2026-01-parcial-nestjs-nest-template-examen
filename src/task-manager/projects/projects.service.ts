import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Project} from '../entities/project.entity';
import {Repository} from 'typeorm';
import {CreateProjectDto} from './dto/create-project-dto';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,
    
    ){}

    async create( createProjectDto: CreateProjectDto): Promise<Project> {
        const project = this.projectRepository.create({
            ...CreateProjectDto,
            name: createProjectDto.name,
            description: createProjectDto.description,


        });
        return this.projectRepository.save(project)
    }
}


