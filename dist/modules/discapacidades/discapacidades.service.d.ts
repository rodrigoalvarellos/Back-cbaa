import { IDiscapacidades } from '../../interfaces/discapacidad.interface';
import { Model } from 'mongoose';
import { DiscapacidadDTO } from '../../dto/discapacidad.dto';
export declare class DiscapacidadesService {
    private readonly discModel;
    constructor(discModel: Model<IDiscapacidades>);
    createDiscapacidad(disc: DiscapacidadDTO): Promise<IDiscapacidades>;
    getAllDisc(): Promise<IDiscapacidades[]>;
    getDiscById(id: string): Promise<IDiscapacidades>;
    updateDisc(id: string, disc: DiscapacidadDTO): Promise<IDiscapacidades>;
    deleteDisc(id: string): Promise<IDiscapacidades>;
}
