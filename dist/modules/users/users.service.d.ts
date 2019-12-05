import { Model } from 'mongoose';
import { UserDTO } from '../../dto/user.dto';
import { IUser } from '../../interfaces/user.interface';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    createUser(user: UserDTO): Promise<IUser>;
    getAllUsers(): Promise<IUser[]>;
    getUserById(id: string): Promise<IUser>;
    getUserByEmail(email: string): Promise<IUser>;
    updateUser(id: string, user: UserDTO): Promise<IUser>;
    deleteUser(id: string): Promise<IUser>;
}
