import { ApiModelProperty } from '@nestjs/swagger';

export class UserDTO {
    @ApiModelProperty()
    nombre: string;
    @ApiModelProperty()
    apellido: string;
    @ApiModelProperty()
    email: string;
    @ApiModelProperty()
    password: string;
    @ApiModelProperty()
    foto: string;
    @ApiModelProperty()
    role: string;
}
