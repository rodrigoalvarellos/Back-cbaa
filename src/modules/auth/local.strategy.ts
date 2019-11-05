import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from '../../dto/login.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(login: LoginDTO): Promise<any> {

    console.log('Ingreso aca Local Strategy');

    const user = await this.authService.validateUser(login);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

}
