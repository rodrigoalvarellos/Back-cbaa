"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OrganizacionesService = class OrganizacionesService {
    constructor(orgModel) {
        this.orgModel = orgModel;
    }
    async createOrganizacion(organizacion) {
        const newOrganizacion = new this.orgModel(organizacion);
        return await newOrganizacion.save();
    }
    async getAll() {
        return await this.orgModel.find({ isActive: true })
            .populate('categorias', 'nombre icono')
            .exec();
    }
    async getFilteredByCategoria(id) {
        return await this.orgModel
            .find({ categorias: id })
            .populate('categorias', 'nombre icono')
            .exec();
    }
};
OrganizacionesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Organizacion')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrganizacionesService);
exports.OrganizacionesService = OrganizacionesService;
//# sourceMappingURL=organizaciones.service.js.map