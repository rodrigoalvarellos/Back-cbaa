import * as bcrypt from 'bcrypt';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';
import { IUser } from '../../interfaces/user.interface';
import { RegisterDTO } from '../../dto/register.dto';
import { UserDTO } from '../../dto/user.dto';

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
        /*
            1- validar si las contraseñas son iguales,
            2- existe ese usuario,
            3- crear usuario y retornarlo
        */
        if ( register.password !== register.confirmPassword ) {
            throw new UnauthorizedException('Las contraseñas ingresadas no coinciden');
        }
        const existe = await this.user$.getUserByEmail(register.email);
        if (existe) { throw new UnauthorizedException('Usuario ya registrado con ese email'); }

        const newUser: UserDTO = {
            email: register.email,
            password: register.password,
            nombre: null,
            apellido: null,
            foto: null,
            descripcion: null,
            role: 'USER_ROLE',
        };

        return await this.user$.createUser(newUser);
    }

}
