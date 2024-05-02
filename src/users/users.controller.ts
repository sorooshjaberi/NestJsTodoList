import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Public } from 'src/auth/auth.public';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UpdateUserDto } from 'src/users/dtos/update-user.dto';
import { User } from 'src/users/entities/users.entity';
import { UsersService } from 'src/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get(':id')
  findOne(@Param('id') id: User['id']) {
    return this.usersService.findOne(id);
  }

  @Public()
  @Post()
  create(@Body() newUser: CreateUserDto) {
    return this.usersService.createUser(newUser);
  }

  @Patch(':id')
  update(@Param('id') id: User['id'], @Body() updatedUser: UpdateUserDto) {
    return this.usersService.updateUser(id, updatedUser);
  }

  @Delete(':id')
  delete(@Param('id') id: User['id']) {
    return this.usersService.deleteUser(id);
  }
}
