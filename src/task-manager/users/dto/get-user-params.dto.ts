import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class GetPlayerParamsDto {
    @IsInt()
    @IsNotEmpty()
    @Type(() => Number)
    id: number;
}
