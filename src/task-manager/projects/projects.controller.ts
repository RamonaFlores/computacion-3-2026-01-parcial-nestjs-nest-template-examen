
import {CreateProjectDto} from './dto/create-project-dto';
import {ProjectsService} from './projects.service';
import { Controller, Body, Post, Get, Param, Patch, Delete } from '@nestjs/common';
@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectService: ProjectsService) {}

    @Post()
    create(@Body() createProjectDto: CreateProjectDto) {
        return this.projectService.create(createProjectDto);
    }

}
