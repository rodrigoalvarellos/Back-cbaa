import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { IUser } from '../../interfaces/user.interface';
import { RegisterDTO } from '../../dto/register.dto';
export declare class AuthService {
    private readonly user$;
    private readonly jwtService;
    constructor(user$: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: IUser): Promise<{
        token: string;
    }>;
    registerUser(register: RegisterDTO): Promise<IUser>;
}
