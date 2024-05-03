import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/todos/entities/todos.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [UsersModule, TypeOrmModule.forFeature([Todo])],
})
export class TodosModule {}
