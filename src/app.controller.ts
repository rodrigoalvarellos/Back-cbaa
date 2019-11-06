import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { ApiUseTags, ApiImplicitHeaders } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { AppService } from './app.service';

@ApiUseTags('Root')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @ApiBearerAuth()
  @ApiImplicitHeaders([{name: 'Authorization', description: 'El Tokeeen!'}])
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Req() req: any) {
    // console.log(req);
    return req.user;
  }
}
