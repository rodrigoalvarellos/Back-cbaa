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
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
class OrganizacionDTO {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], OrganizacionDTO.prototype, "nombre", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], OrganizacionDTO.prototype, "email", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], OrganizacionDTO.prototype, "web", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], OrganizacionDTO.prototype, "descripcion", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], OrganizacionDTO.prototype, "telefono", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], OrganizacionDTO.prototype, "categorias", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], OrganizacionDTO.prototype, "discapacidades", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], OrganizacionDTO.prototype, "direccion", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], OrganizacionDTO.prototype, "lat", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], OrganizacionDTO.prototype, "lng", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], OrganizacionDTO.prototype, "portadaImg", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], OrganizacionDTO.prototype, "fotos", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Boolean)
], OrganizacionDTO.prototype, "isActive", void 0);
exports.OrganizacionDTO = OrganizacionDTO;
//# sourceMappingURL=organizacion.dto.js.map