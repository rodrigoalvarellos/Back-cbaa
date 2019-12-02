import { ApiModelProperty } from '@nestjs/swagger';

export class DiscapacidadDTO {
    @ApiModelProperty() readonly nombre: string;
    @ApiModelProperty() readonly icono: string;
    @ApiModelProperty() readonly descripcion: string;
    @ApiModelProperty() readonly isActive: boolean;
}
