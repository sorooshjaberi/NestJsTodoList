import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly desciption: string;

  @IsBoolean()
  @IsOptional()
  readonly done: boolean;
}
