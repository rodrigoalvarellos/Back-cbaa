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
const categorias_service_1 = require("./categorias.service");
const categoria_dto_1 = require("../../dto/categoria.dto");
const passport_1 = require("@nestjs/passport");
let CategoriasController = class CategoriasController {
    constructor(categ$) {
        this.categ$ = categ$;
    }
    getAll() {
        return this.categ$.getAllCateg();
    }
    getDiscById(id) {
        return this.categ$.getCategById(id);
    }
    createDisc(categ) {
        return this.categ$.createCategoria(categ);
    }
    updateDisc(id, categ) {
        return this.categ$.updateCateg(id, categ);
    }
    deleteUser(id) {
        return this.categ$.deleteCateg(id);
    }
};
__decorate([
    swagger_1.ApiOperation({ title: 'Obtener todas las categorias' }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoriasController.prototype, "getAll", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Obtener categoria por ID' }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriasController.prototype, "getDiscById", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Crear nueva categoria' }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categoria_dto_1.CategoriaDTO]),
    __metadata("design:returntype", void 0)
], CategoriasController.prototype, "createDisc", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Actualizar categoria' }),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, categoria_dto_1.CategoriaDTO]),
    __metadata("design:returntype", void 0)
], CategoriasController.prototype, "updateDisc", null);
__decorate([
    swagger_1.ApiOperation({ title: 'Eliminar categoria', description: 'Eliminacion logica de categoria' }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriasController.prototype, "deleteUser", null);
CategoriasController = __decorate([
    swagger_1.ApiUseTags('Categorias'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Controller('categorias'),
    __metadata("design:paramtypes", [categorias_service_1.CategoriasService])
], CategoriasController);
exports.CategoriasController = CategoriasController;
//# sourceMappingURL=categorias.controller.js.map