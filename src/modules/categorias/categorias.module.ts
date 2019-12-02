import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { CategoriasSchema } from '../../schemas/categoria.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ MongooseModule.forFeature([{ name: 'Categorias', schema: CategoriasSchema }])],
  controllers: [CategoriasController],
  providers: [CategoriasService]
})
export class CategoriasModule {}
