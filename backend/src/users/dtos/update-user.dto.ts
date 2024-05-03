import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
