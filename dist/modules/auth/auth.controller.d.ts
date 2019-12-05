import { AuthService } from './auth.service';
import { RegisterDTO } from '../../dto/register.dto';
export declare class AuthController {
    private auth$;
    constructor(auth$: AuthService);
    login(req: any): Promise<{
        token: string;
    }>;
    registerUser(register: RegisterDTO): Promise<import("../../interfaces/user.interface").IUser>;
    logout(): Promise<{
        ok: boolean;
    }>;
}
