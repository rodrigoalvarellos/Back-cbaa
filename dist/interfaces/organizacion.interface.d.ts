import { Document } from 'mongoose';
export interface IOrganizacion extends Document {
    _id: string;
    nombre: string;
    email: string;
    web?: string;
    descripcion?: string;
    telefono?: string;
    categorias: [];
    discapacidades: [];
    direccion: string;
    lat: number;
    lng: number;
    portadaImg?: string;
    fotos: [];
    isActive?: boolean;
}
