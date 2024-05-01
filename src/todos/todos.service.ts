import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/todos/entities/todos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  findAll() {
    return this.todoRepository.find();
  }

  async findOne(id: number) {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException(`Todo #${id} dose not exist`);
    }
    return todo;
  }

  create(newTodo: Todo) {
    const todo = this.todoRepository.create(newTodo);
    return this.todoRepository.save(todo);
  }

  async update(id: number, newVersion: Partial<Todo>) {
    const todo = await this.todoRepository.preload({ id: +id, ...newVersion });

    if (!todo) {
      throw new NotFoundException(`Todo #${id} dose not exist`);
    }
    return this.todoRepository.save(todo);
  }

  async delete(id: number) {
    const todo = await this.findOne(id);
    this.todoRepository.remove(todo);
  }
}
