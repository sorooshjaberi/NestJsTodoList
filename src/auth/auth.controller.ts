import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/auth/auth.public';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto } from 'src/auth/dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  login(@Body() loginPayload: LoginDto) {
    return this.authService.login(loginPayload);
  }
}
