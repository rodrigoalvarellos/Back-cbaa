import { Controller, Get, UseGuards, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginDTO } from './dto/login.dto';
import { ApiUseTags, ApiImplicitBody } from '@nestjs/swagger';
import { AuthService } from './modules/auth/auth.service';

@ApiUseTags('Root')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private auth$: AuthService ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiImplicitBody({name: 'Login Dto', type: LoginDTO})
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Req() req) {
    return req.user;
    // return this.authService.login(req.user);
  }
}
