import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UpdateUserDto } from 'src/users/dtos/update-user.dto';
import { User } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findOne(id: User['id']) {
    const user = await this.userRepository.findOneBy({
      id,
    });

    if (!user) {
      throw new NotFoundException(`There's no such user with this id : #${id}`);
    }

    return user;
  }

  createUser(newUser: CreateUserDto) {
    const createdUser = this.userRepository.create(newUser);
    return this.userRepository.save(createdUser);
  }

  async updateUser(id: User['id'], newVersionUser: UpdateUserDto) {
    const newUser = await this.userRepository.preload({
      id: +id,
      ...newVersionUser,
    });

    if (!newUser) {
      throw new NotFoundException(`There's no such user with this id : #${id}`);
    }
    return this.userRepository.save(newUser);
  }

  async deleteUser(id: User['id']) {
    const newUser = await this.findOne(id);

    if (!newUser) {
      throw new NotFoundException(`There's no such user with this id : #${id}`);
    }

    this.userRepository.remove(newUser);
  }
}
