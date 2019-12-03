import * as mongoose from 'mongoose';



export const CategoriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    icono: {
        type: String,
        required: [true, 'El icono es obligatorio'],
    },
    descripcion: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});
