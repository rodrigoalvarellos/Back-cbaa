import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';
import { LoginDTO } from '../../dto/login.dto';
import { IUser } from '../../interfaces/user.interface';

@Injectable()
export class AuthService {

    constructor(
        private readonly user$: UsersService,
        private readonly jwtService: JwtService ) { }

    async validateUser(email: string, pass: string): Promise<any> {

        const user: IUser = await this.user$.getUserByEmail(email);

        if (user && bcrypt.compareSync(pass, user.password)) {
            return user;
        }

        return null;
    }

    async login(user: IUser) {
        const payload = { username: user.email, sub: user._id};
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }

}
