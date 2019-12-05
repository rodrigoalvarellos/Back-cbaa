"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const organizaciones_controller_1 = require("./organizaciones.controller");
const organizaciones_service_1 = require("./organizaciones.service");
const mongoose_1 = require("@nestjs/mongoose");
const categoria_schema_1 = require("../../schemas/categoria.schema");
const organizacion_schema_1 = require("../../schemas/organizacion.schema");
let OrganizacionesModule = class OrganizacionesModule {
};
OrganizacionesModule = __decorate([
    common_1.Module({
        controllers: [organizaciones_controller_1.OrganizacionesController],
        providers: [organizaciones_service_1.OrganizacionesService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Categoria', schema: categoria_schema_1.CategoriaSchema },
                { name: 'Organizacion', schema: organizacion_schema_1.OrganizacionSchema },
            ]),
        ],
    })
], OrganizacionesModule);
exports.OrganizacionesModule = OrganizacionesModule;
//# sourceMappingURL=organizaciones.module.js.map