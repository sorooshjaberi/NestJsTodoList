import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/auth/auth.public';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto } from 'src/auth/dtos/login.dto';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Public()
  @Post('login')
  login(@Body() loginPayload: LoginDto) {
    return this.authService.login(loginPayload);
  }

  @Public()
  @Post('signup')
  signup(@Body() signupPayload: CreateUserDto) {
    return this.usersService.createUser(signupPayload);
  }
}
