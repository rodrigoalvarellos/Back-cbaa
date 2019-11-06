import { Controller, UseGuards, Post, Req } from '@nestjs/common';
import { ApiImplicitBody } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDTO } from '../../dto/login.dto';

@Controller('auth')
export class AuthController {

    constructor(private auth$: AuthService) { }

    @ApiImplicitBody({ name: 'Login Dto', type: LoginDTO })
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() req: any) {
        // return req.user;
        return this.auth$.login(req.user);
    }
}
