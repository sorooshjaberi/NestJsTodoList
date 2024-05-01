import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TodosModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      database: 'todolist',
      username: 'todolist',
      password: '1',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    UsersModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
