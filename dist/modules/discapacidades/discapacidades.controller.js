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
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const discapacidad_dto_1 = require("../../dto/discapacidad.dto");
const discapacidades_service_1 = require("./discapacidades.service");
let DiscapacidadesController = class DiscapacidadesController {
    constructor(disc$) {
        this.disc$ = disc$;
    }
    getAll() {
        return this.disc$.getAllDisc();
    }
    getDiscById(id) {
        return this.disc$.getDiscById(id);
    }
    createDisc(disc) {
        return this.disc$.createDiscapacidad(disc);
    }
    updateDisc(id, disc) {
        return this.disc$.updateDisc(id, disc);
    }
    deleteUser(id) {
        return this.disc$.deleteDisc(id);
    }
};
__decorate([
    swagger_1.ApiOperation({ title: 'Obtener todas las discapacidades' }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiscapacidadesController.prototype, "getAll", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Obtener discapacidad por ID' }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscapacidadesController.prototype, "getDiscById", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Crear nueva discapacidad' }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discapacidad_dto_1.DiscapacidadDTO]),
    __metadata("design:returntype", void 0)
], DiscapacidadesController.prototype, "createDisc", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Actualizar discapacidad' }),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, discapacidad_dto_1.DiscapacidadDTO]),
    __metadata("design:returntype", void 0)
], DiscapacidadesController.prototype, "updateDisc", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Eliminar discapacidad', description: 'Eliminacion logica de discapacidad' }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscapacidadesController.prototype, "deleteUser", null);
DiscapacidadesController = __decorate([
    swagger_1.ApiUseTags('Discapacidades'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Controller('discapacidades'),
    __metadata("design:paramtypes", [discapacidades_service_1.DiscapacidadesService])
], DiscapacidadesController);
exports.DiscapacidadesController = DiscapacidadesController;
//# sourceMappingURL=discapacidades.controller.js.map