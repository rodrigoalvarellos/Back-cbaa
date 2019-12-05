"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.CategoriaSchema = new mongoose.Schema({
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
//# sourceMappingURL=categoria.schema.js.map