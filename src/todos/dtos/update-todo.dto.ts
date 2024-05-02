import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from 'src/todos/dtos/create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
