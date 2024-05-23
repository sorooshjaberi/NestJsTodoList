import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { get, set } from 'lodash';
import { CreateTodoDto } from 'src/todos/dtos/create-todo.dto';
import { UpdateTodoDto } from 'src/todos/dtos/update-todo.dto';
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
  async createTodo(
    @Body() createdTodo: CreateTodoDto,
    @Req() request: Request,
  ) {
    set(createdTodo, ['user'], get(request, 'user'));

    return this.todosService.create(createdTodo);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatedTodo: UpdateTodoDto) {
    await this.todosService.update(id, updatedTodo);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.todosService.delete(id);
  }
}
