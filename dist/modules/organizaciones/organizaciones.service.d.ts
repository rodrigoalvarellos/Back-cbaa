import { Model } from 'mongoose';
import { IOrganizacion } from '../../interfaces/organizacion.interface';
import { OrganizacionDTO } from '../../dto/organizacion.dto';
export declare class OrganizacionesService {
    private readonly orgModel;
    constructor(orgModel: Model<IOrganizacion>);
    createOrganizacion(organizacion: OrganizacionDTO): Promise<IOrganizacion>;
    getAll(): Promise<IOrganizacion[]>;
    getFilteredByCategoria(id: string): Promise<IOrganizacion[]>;
}
