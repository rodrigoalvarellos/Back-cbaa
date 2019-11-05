import * as bcrypt from 'bcrypt';

import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDTO } from '../../dto/login.dto';
import { IUser } from '../../interfaces/user.interface';

@Injectable()
export class AuthService {

    constructor(private readonly user$: UsersService) { }

    async validateUser(username: string, pass: string): Promise<any> {

        const user: IUser = await this.user$.getUserByEmail(username);

        if (user && bcrypt.compareSync(pass, user.password)) {
            return user;
        }

        return null;
    }

}
