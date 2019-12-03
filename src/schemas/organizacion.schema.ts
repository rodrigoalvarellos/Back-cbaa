import * as mongoose from 'mongoose';

export const OrganizacionSchema = new mongoose.Schema({
    nombre: { type: String, required: [true, 'El nombre es obligatorio']},
    email: { type: String, required: [true, 'El email es obligatorio'] },
    web: { type: String },
    descripcion: { type: String },
    telefono: { type: String},
    categorias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }],
    direccion: { type: String, required: [true, 'La dirección es obligatoria'] },
    lat: { type: String, required: [ true, 'Latitud obligatoria'] },
    lng: { type: String, required: [ true, 'Longitud obligatoria'] },
    portadaImg: { type: String },
    fotos: [String],
    isActive: { type: Boolean, default: true },
});
