import { PartialType } from '@nestjs/swagger';
import { CreateTodoDto } from 'src/todos/dtos/create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
