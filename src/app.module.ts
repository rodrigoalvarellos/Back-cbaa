import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { LugaresModule } from './modules/lugares/lugares.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/cba-accesible', { useNewUrlParser: true, useUnifiedTopology: true }),
    UsersModule,
    AuthModule,
    LugaresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
