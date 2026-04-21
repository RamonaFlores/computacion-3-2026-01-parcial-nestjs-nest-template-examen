import {  IsString, MaxLength,  } from 'class-validator';
export class CreateUserDto {

    @IsString()
    @MaxLength(50)
    name: string;

    @IsString()
    @MaxLength(50)
    email: string;

}

