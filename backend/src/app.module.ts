import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from 'src/auth/auth.guard';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations, {
  EnvironmentVariables,
} from 'src/config/configurations';
import { WithStackFilterTsFilter } from 'src/common/filters/with-stack.filter.ts/with-stack.filter.ts.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
      envFilePath: '.env.dev',
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (
        configService: ConfigService<Readonly<EnvironmentVariables>, true>,
      ) => ({
        port: configService.get('database.port', { infer: true }),
        host: configService.get('database.host', { infer: true }),
        type: 'postgres',
        database: 'todolist',
        username: 'todolist',
        password: '1',
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TodosModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      useClass: AuthGuard,
      provide: APP_GUARD,
    },
    {
      useClass: WithStackFilterTsFilter,
      provide: APP_FILTER,
    },
  ],
})
export class AppModule {}
