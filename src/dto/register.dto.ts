import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterDTO {
    @ApiModelProperty() readonly email: string;
    @ApiModelProperty() readonly password: string;
    @ApiModelProperty() readonly confirmPassword: string;
    @ApiModelProperty() readonly terms: string;
}
