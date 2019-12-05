"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./modules/users/users.module");
const auth_module_1 = require("./modules/auth/auth.module");
const lugares_module_1 = require("./modules/lugares/lugares.module");
const discapacidades_module_1 = require("./modules/discapacidades/discapacidades.module");
const categorias_module_1 = require("./modules/categorias/categorias.module");
const organizaciones_module_1 = require("./modules/organizaciones/organizaciones.module");
const BDLOCAL = 'mongodb://localhost/cba-accesible';
const BDONLINE = 'mongodb+srv://ralvarellos69:H4293tS2JN3PJ2Y7@cluster0-alygm.mongodb.net/cba-accesible';
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot(BDONLINE, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            lugares_module_1.LugaresModule,
            discapacidades_module_1.DiscapacidadesModule,
            categorias_module_1.CategoriasModule,
            organizaciones_module_1.OrganizacionesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map