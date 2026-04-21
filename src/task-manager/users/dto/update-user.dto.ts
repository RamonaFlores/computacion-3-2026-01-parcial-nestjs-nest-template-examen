import { PartialType } from '@nestjs/mapped-types';

import { CreateUseDto } from './create-user.dto';
export class UpdatePlayerDto extends PartialType(CreateUseDto) {}
