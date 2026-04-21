import { Controller, Body, Post, Get, Param, Patch, Delete } from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {GetUserParamsDto} from './dto/get-user-params.dto';
import {UpdateUserDto} from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param() params: GetUserParamsDto) {
        return this.userService.findOne(params.id);
    }


    @Delete(':id')
    remove(@Param() params: GetUserParamsDto) {
        return this.userService.remove(params.id);
    }

    @Patch(':id')
    update(@Param() params: GetUserParamsDto, @Body() updatePlayerDto: UpdateUserDto) {
        return this.userService.update(params.id, updatePlayerDto);
    }

}
