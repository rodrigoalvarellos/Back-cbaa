import { Controller, Get, UseGuards, Req, Post } from '@nestjs/common';
import { ApiUseTags, ApiImplicitHeaders } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { AppService } from './app.service';

@ApiUseTags('Root')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post()
  postHello() {
    return this.appService.getHello();
  }

  // @ApiBearerAuth()
  // @ApiImplicitHeaders([{name: 'Authorization', description: 'El Tokeeen!'}])
  // @UseGuards(AuthGuard('jwt'))
  // @Get('profile')
  // getProfile(@Req() req: any) {
  //   return req.user;
  // }
}
