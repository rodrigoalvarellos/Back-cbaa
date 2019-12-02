
import { Document } from 'mongoose';

export interface IDiscapacidades extends Document {
    _id: string;
    nombre: string;
    icono: string;
    descripcion: string;
    isActive: boolean;
}
