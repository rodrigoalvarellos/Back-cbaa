import { Document } from 'mongoose';
export interface ICategoria extends Document {
    _id: string;
    nombre: string;
    icono: string;
    descripcion: string;
    isActive: boolean;
}
