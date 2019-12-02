import { Module } from '@nestjs/common';
import { DiscapacidadesController } from './discapacidades.controller';
import { DiscapacidadesService } from './discapacidades.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscapacidadesSchema } from '../../schemas/discapacidad.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Discapacidades', schema: DiscapacidadesSchema }])],
  controllers: [DiscapacidadesController],
  providers: [DiscapacidadesService],
})
export class DiscapacidadesModule {}
