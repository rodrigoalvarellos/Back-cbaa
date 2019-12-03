import { Module } from '@nestjs/common';
import { OrganizacionesController } from './organizaciones.controller';
import { OrganizacionesService } from './organizaciones.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriaSchema } from '../../schemas/categoria.schema';
import { OrganizacionSchema } from '../../schemas/organizacion.schema';

@Module({
  controllers: [OrganizacionesController],
  providers: [OrganizacionesService],
  imports: [
    MongooseModule.forFeature([
      { name: 'Categoria', schema: CategoriaSchema },
      { name: 'Organizacion', schema: OrganizacionSchema },
    ]),
  ],
})
export class OrganizacionesModule {}
