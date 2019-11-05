import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { UserDTO } from '../../dto/user.dto';
import { UsersService } from './users.service';
import { LoginDTO } from '../../dto/login.dto';

@ApiUseTags('Usuarios')
@Controller('users')
export class UsersController {

    constructor( private user$: UsersService ) {}

    @ApiOperation({ title: 'Crear nuevo usuario' })
    @Post()
    createUser( @Body() user: UserDTO) {
        return this.user$.createUser(user);
    }

    @ApiOperation({ title: 'Obtener todos los usuarios' })
    @Get()
    getAllUsers() {
        return this.user$.getAllUsers();
    }

    @ApiOperation({ title: 'Obtener Usuario por ID' })
    @Get(':id')
    getUserById( @Param('id') id: string ) {
        return this.user$.getUserById(id);
    }

    @ApiOperation({ title: 'Obtener Usuario por Email' })
    @Post('/userByEmail')
    getUserByEmail( @Body() login: LoginDTO ) {
        return this.user$.getUserByEmail(login.email);
    }

    @ApiOperation({ title: 'Actualizar usuario' })
    @Put(':id')
    updateUser( @Param('id') id: string, @Body() user: UserDTO ) {
      return this.user$.updateUser(id, user);
    }

    @ApiOperation({title: 'Eliminar usuario', description: 'Eliminacion logica de usuario'})
    @Delete(':id')
    deleteUser( @Param('id') id: string ) {
        return this.user$.deleteUser(id);
    }

}
