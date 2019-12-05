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
const organizaciones_service_1 = require("./organizaciones.service");
const organizacion_dto_1 = require("../../dto/organizacion.dto");
let OrganizacionesController = class OrganizacionesController {
    constructor(org$) {
        this.org$ = org$;
    }
    createOrg(org) {
        return this.org$.createOrganizacion(org);
    }
    getAllOrg() {
        return this.org$.getAll();
    }
    getOrgById(id) {
        return this.getOrgById(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [organizacion_dto_1.OrganizacionDTO]),
    __metadata("design:returntype", void 0)
], OrganizacionesController.prototype, "createOrg", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrganizacionesController.prototype, "getAllOrg", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrganizacionesController.prototype, "getOrgById", null);
OrganizacionesController = __decorate([
    swagger_1.ApiUseTags('Organizaciones'),
    common_1.Controller('organizaciones'),
    __metadata("design:paramtypes", [organizaciones_service_1.OrganizacionesService])
], OrganizacionesController);
exports.OrganizacionesController = OrganizacionesController;
//# sourceMappingURL=organizaciones.controller.js.map