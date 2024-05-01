import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Todo } from 'src/todos/entities/todos.entity';
import { TodosService } from 'src/todos/todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  findAll() {
    return this.todosService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.todosService.findOne(id);
  }

  @Post()
  createTodo(@Body() createdTodo: Todo) {
    this.todosService.create(createdTodo);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatedTodo: Partial<Todo>) {
    await this.todosService.update(id, updatedTodo);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.todosService.delete(id);
  }
}
