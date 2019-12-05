"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
function SwaggerConfig(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('CBA-Accesible - Backend API')
        .setDescription('Backend desarrollado con Nest:JS. For more help go to https://docs.nestjs.com/recipes/swagger')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('swagger', app, document);
}
exports.SwaggerConfig = SwaggerConfig;
//# sourceMappingURL=swagger.js.map