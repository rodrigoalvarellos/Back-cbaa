import * as mongoose from 'mongoose';
import { SwaggerConfig } from '../configs/swagger';

const rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido',
};

export const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio'],
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatorio'],
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos,
    },
    foto: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

UserSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
};
