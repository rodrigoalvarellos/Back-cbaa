import { Controller, UseGuards, Post, Req, Body, Delete } from '@nestjs/common';
import { ApiImplicitBody, ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDTO } from '../../dto/login.dto';
import { RegisterDTO } from '../../dto/register.dto';

@ApiUseTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private auth$: AuthService) { }

    @ApiOperation({ title: 'Log in endpoint - Retorna Token ' })
    @ApiImplicitBody({ name: 'Login Dto', type: LoginDTO })
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() req: any) {
        return this.auth$.login(req.user);
    }

    @ApiOperation({ title: 'Desloguear usuario' })
    @Post('register')
    async registerUser( @Body() register: RegisterDTO) {
        return this.auth$.registerUser(register);
    }

    @ApiOperation({ title: 'logout de usuario' })
    @Delete('logout')
    async logout() {
        return { ok: true};
    }
}
