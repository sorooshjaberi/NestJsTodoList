import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from 'src/auth/dtos/login.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login({ password, username }: LoginDto) {
    const user = await this.usersService.findOneBy({
      username,
    });
    if (user.password !== password) {
      throw new UnauthorizedException('Wrong username or password');
    }

    const jwt = await this.jwtService.signAsync({
      sub: user.id,
      username: user.username,
    });

    return {
      accesss_token: jwt,
    };
  }
}
