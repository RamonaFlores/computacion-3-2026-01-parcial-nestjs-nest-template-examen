import {  IsString, MaxLength,  } from 'class-validator';
export class CreateUseDto {

    @IsString()
    @MaxLength(50)
    name: string;

    @IsString()
    @MaxLength(50)
    emai: string;

}

