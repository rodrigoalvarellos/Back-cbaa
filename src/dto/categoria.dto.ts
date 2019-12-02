import { ApiModelProperty } from '@nestjs/swagger';

export class CategoriaDTO {
    @ApiModelProperty() readonly nombre: string;
    @ApiModelProperty() readonly icono: string;
    @ApiModelProperty() readonly descripcion: string;
    @ApiModelProperty() readonly isActive: boolean;
}
