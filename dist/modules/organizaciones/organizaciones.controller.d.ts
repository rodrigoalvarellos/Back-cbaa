import { OrganizacionesService } from './organizaciones.service';
import { OrganizacionDTO } from '../../dto/organizacion.dto';
export declare class OrganizacionesController {
    private org$;
    constructor(org$: OrganizacionesService);
    createOrg(org: OrganizacionDTO): Promise<import("../../interfaces/organizacion.interface").IOrganizacion>;
    getAllOrg(): Promise<import("../../interfaces/organizacion.interface").IOrganizacion[]>;
    getOrgById(id: string): any;
}
