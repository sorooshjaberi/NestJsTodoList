import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    abortOnError: false,
    cors: true,
  });

  const options = new DocumentBuilder()
    .setTitle('TodoList')
    .setDescription('A todolist application')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
