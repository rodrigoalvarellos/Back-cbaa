import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { OrganizacionesService } from './organizaciones.service';
import { OrganizacionDTO } from '../../dto/organizacion.dto';

@ApiUseTags('Organizaciones')
@Controller('organizaciones')
export class OrganizacionesController {

    constructor( private org$: OrganizacionesService) {}

    @Post()
    createOrg( @Body() org: OrganizacionDTO ) {
        return this.org$.createOrganizacion(org);
    }

    @Get()
    getAllOrg() {
        return this.org$.getAll();
    }

    @Get(':id')
    getOrgById( @Param('id') id: string) {
        return this.getOrgById(id);
    }
}
