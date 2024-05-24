import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { get } from 'lodash';
import { IS_PUBLIC_KEY } from 'src/auth/auth.public';
import { jwtConstants } from 'src/auth/constants';
import { User } from 'src/users/entities/users.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    private usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest() as Request;
    const token = this.extractTokenFromHeader(request);
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getClass(),
      context.getHandler(),
    ]);
    if (isPublic) {
      return true;
    }
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      // if fails, the token is invalid and should throw an error
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });

      const username = get(payload, ['username']) as User['username'];
      const user = await this.usersService.findOneBy({ username });

      request['user'] = user;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }
  private extractTokenFromHeader(request: Request) {
    const [type, token] =
      get(request, ['headers', 'authorization'])?.split(' ') ?? [];
    return type === 'Bearer' ? token : null;
  }
}
