import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { LugaresModule } from './modules/lugares/lugares.module';
import { DiscapacidadesModule } from './modules/discapacidades/discapacidades.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { OrganizacionesModule } from './modules/organizaciones/organizaciones.module';

const BDLOCAL = 'mongodb://localhost/cba-accesible';
const BDONLINE =  'mongodb+srv://ralvarellos69:H4293tS2JN3PJ2Y7@cluster0-alygm.mongodb.net/cba-accesible';

@Module({
  imports: [
    MongooseModule.forRoot( BDLOCAL , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }),
    UsersModule,
    AuthModule,
    LugaresModule,
    DiscapacidadesModule,
    CategoriasModule,
    OrganizacionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
