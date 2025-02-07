import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from '../../dto/user.dto';
import { IUser } from '../../interfaces/user.interface';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) { }

    async createUser(user: UserDTO) {
        const newUser = new this.userModel(user);
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        return await newUser.save();
    }

    async getAllUsers() {
        return await this.userModel.find({ isActive: true });
    }

    async getUserById(id: string) {
        return await this.userModel.findById(id);
    }

    async getUserByEmail(email: string) {
        return await this.userModel.findOne({ email });
    }

    async updateUser(id: string, user: UserDTO) {
        return await this.userModel.findOneAndUpdate(id, user, { new: true });
    }

    async deleteUser(id: string) {
        const userDeleted = await this.userModel.findById(id);
        userDeleted.isActive = false;
        return await userDeleted.save();
    }

}
