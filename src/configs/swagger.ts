import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function SwaggerConfig(app: INestApplication) {

    const options = new DocumentBuilder()
        .setTitle('CBA-Accesible - Backend API')
        .setDescription('Backend desarrollado con Nest:JS. For more help go to https://docs.nestjs.com/recipes/swagger')
        .setVersion('1.0')
        .setSchemes('http', 'https')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);

}
