import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { User } from 'src/users/entities/users.entity';

export class CreateTodoDto {
  @IsString()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsBoolean()
  @IsOptional()
  readonly done: boolean;

  user: User;
}
