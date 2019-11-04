import { Document } from 'mongoose';

export interface IUser extends Document {
    id?: string;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    role?: string;
    foto?: string;
    isActive?: boolean;
}
