import { UserDTO } from '../../dto/user.dto';
import { UsersService } from './users.service';
import { LoginDTO } from '../../dto/login.dto';
export declare class UsersController {
    private user$;
    constructor(user$: UsersService);
    createUser(user: UserDTO): Promise<import("../../interfaces/user.interface").IUser>;
    getAllUsers(): Promise<import("../../interfaces/user.interface").IUser[]>;
    getUserById(id: string): Promise<import("../../interfaces/user.interface").IUser>;
    getUserByEmail(login: LoginDTO): Promise<import("../../interfaces/user.interface").IUser>;
    updateUser(id: string, user: UserDTO): Promise<import("../../interfaces/user.interface").IUser>;
    deleteUser(id: string): Promise<import("../../interfaces/user.interface").IUser>;
}
