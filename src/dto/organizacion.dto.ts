import { ApiModelProperty } from '@nestjs/swagger';

export class OrganizacionDTO {
    @ApiModelProperty() readonly nombre: string;
    @ApiModelProperty() readonly email: string;
    @ApiModelProperty() readonly web: string;
    @ApiModelProperty() readonly descripcion: string;
    @ApiModelProperty() readonly telefono: string;
    @ApiModelProperty() readonly categorias: [];
    @ApiModelProperty() readonly discapacidades: [];
    @ApiModelProperty() readonly direccion: string;
    @ApiModelProperty() readonly lat: number;
    @ApiModelProperty() readonly lng: number;
    @ApiModelProperty() readonly portadaImg: string;
    @ApiModelProperty() readonly fotos: [];
    @ApiModelProperty() readonly isActive: boolean;
}
