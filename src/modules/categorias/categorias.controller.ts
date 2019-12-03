import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { CategoriasService } from './categorias.service';
import { CategoriaDTO } from '../../dto/categoria.dto';

@ApiUseTags('Categorias')
@Controller('categorias')
export class CategoriasController {

    constructor( private categ$: CategoriasService ) {}

    @ApiOperation({ title: 'Obtener todas las categorias' })
    @Get()
    getAll() {
        return this.categ$.getAllCateg();
    }

    @ApiOperation({ title: 'Obtener categoria por ID' })
    @Get(':id')
    getDiscById( @Param('id') id: string ) {
        return this.categ$.getCategById(id);
    }

    @ApiOperation({ title: 'Crear nueva categoria' })
    @Post()
    createDisc( @Body() categ: CategoriaDTO ) {
        return this.categ$.createCategoria(categ);
    }

    @ApiOperation({ title: 'Actualizar categoria' })
    @Put(':id')
    updateDisc( @Param('id') id: string, @Body() categ: CategoriaDTO ) {
        return this.categ$.updateCateg(id, categ);
    }

    @ApiOperation({ title: 'Eliminar categoria', description: 'Eliminacion logica de categoria' })
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.categ$.deleteCateg(id);
    }

}
