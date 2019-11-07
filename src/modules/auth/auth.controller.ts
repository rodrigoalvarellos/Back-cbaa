import { Controller, UseGuards, Post, Req, Body } from '@nestjs/common';
import { ApiImplicitBody } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDTO } from '../../dto/login.dto';
import { RegisterDTO } from '../../dto/register.dto';

@Controller('auth')
export class AuthController {

    constructor(private auth$: AuthService) { }

    @ApiImplicitBody({ name: 'Login Dto', type: LoginDTO })
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() req: any) {
        return this.auth$.login(req.user);
    }

    @Post('register')
    async registerUser( @Body() register: RegisterDTO) {
        console.log(register);
    }
}
