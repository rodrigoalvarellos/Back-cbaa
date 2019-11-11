import { ApiModelProperty } from '@nestjs/swagger';

export class UserDTO {
    @ApiModelProperty() readonly nombre: string;
    @ApiModelProperty() readonly apellido: string;
    @ApiModelProperty() readonly email: string;
    @ApiModelProperty() readonly password: string;
    @ApiModelProperty() readonly descripcion: string;
    @ApiModelProperty() readonly foto: string;
    @ApiModelProperty() readonly role: string;
}
