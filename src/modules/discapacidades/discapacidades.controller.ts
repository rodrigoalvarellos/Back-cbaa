import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { DiscapacidadDTO } from '../../dto/discapacidad.dto';
import { DiscapacidadesService } from './discapacidades.service';

@ApiUseTags('Discapacidades')
@UseGuards(AuthGuard('jwt'))
@Controller('discapacidades')
export class DiscapacidadesController {

    constructor( private disc$: DiscapacidadesService ) {}

    @ApiOperation({ title: 'Obtener todas las discapacidades' })
    @Get()
    getAll() {
        return this.disc$.getAllDisc();
    }

    @ApiOperation({ title: 'Obtener discapacidad por ID' })
    @Get(':id')
    getDiscById( @Param('id') id: string ) {
        return this.disc$.getDiscById(id);
    }

    @ApiOperation({ title: 'Crear nueva discapacidad' })
    @Post()
    createDisc( @Body() disc: DiscapacidadDTO ) {
        return this.disc$.createDiscapacidad(disc);
    }

    @ApiOperation({ title: 'Actualizar discapacidad' })
    @Put(':id')
    updateDisc( @Param('id') id: string, @Body() disc: DiscapacidadDTO ) {
        return this.disc$.updateDisc(id, disc);
    }

    @ApiOperation({ title: 'Eliminar discapacidad', description: 'Eliminacion logica de discapacidad' })
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.disc$.deleteDisc(id);
    }

}
