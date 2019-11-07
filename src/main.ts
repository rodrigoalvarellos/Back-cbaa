import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './configs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  SwaggerConfig(app);
  await app.listen(3000);
}
bootstrap();
