import { Injectable , NotFoundException} from '@nestjs/common';
import { Repository } from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from '../entities/user.entity';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository (User)
        private readonly userRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = this.userRepository.create({
            ...createUserDto,
            name: createUserDto.name,
            email: createUserDto.email
        });
        return this.userRepository.save(user)
}
async findAll(): Promise<User[]> {
    return this.userRepository.find();
}

async findOne(id: number): Promise<User> {
    const player = await this.userRepository.findOneBy({ id });
    if (!player) {
        throw new NotFoundException(`user with id ${id} not found`);
    }

    return player;
}

async update(id: number, updatePlayerDto: UpdateUserDto): Promise<User> {
    const player = await this.findOne(id);
    const updatedPlayer = this.userRepository.merge(player, updatePlayerDto);

    return this.userRepository.save(updatedPlayer);
}

async remove(id: number): Promise<{ id: number }> {
    await this.findOne(id);
    await this.userRepository.delete(id);

    return { id };
}

}