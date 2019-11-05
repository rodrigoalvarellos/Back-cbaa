import { ApiModelProperty } from '@nestjs/swagger';

export class LoginDTO {
    @ApiModelProperty() readonly username: string;
    @ApiModelProperty() readonly password: string;
}
