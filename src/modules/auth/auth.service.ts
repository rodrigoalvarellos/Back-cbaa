import * as bcrypt from 'bcrypt';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';
import { IUser } from '../../interfaces/user.interface';
import { RegisterDTO } from '../../dto/register.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly user$: UsersService,
        private readonly jwtService: JwtService) { }

    async validateUser(email: string, pass: string): Promise<any> {

        const user: IUser = await this.user$.getUserByEmail(email);

        if (user && bcrypt.compareSync(pass, user.password)) {
            return user;
        }

        return null;
    }

    async login(user: IUser) {
        const payload = { username: user.email, sub: user._id };
        return { token: this.jwtService.sign(payload) };
    }

    async registerUser( register: RegisterDTO) {
        // TODO - 1ro, validar si existe ese usuario, crear usuario, retornar ok o retonar a pantalla para cargar el perfil

    }

}
