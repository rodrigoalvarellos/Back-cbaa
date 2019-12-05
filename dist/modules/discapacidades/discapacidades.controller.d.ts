import { DiscapacidadDTO } from '../../dto/discapacidad.dto';
import { DiscapacidadesService } from './discapacidades.service';
export declare class DiscapacidadesController {
    private disc$;
    constructor(disc$: DiscapacidadesService);
    getAll(): Promise<import("../../interfaces/discapacidad.interface").IDiscapacidades[]>;
    getDiscById(id: string): Promise<import("../../interfaces/discapacidad.interface").IDiscapacidades>;
    createDisc(disc: DiscapacidadDTO): Promise<import("../../interfaces/discapacidad.interface").IDiscapacidades>;
    updateDisc(id: string, disc: DiscapacidadDTO): Promise<import("../../interfaces/discapacidad.interface").IDiscapacidades>;
    deleteUser(id: string): Promise<import("../../interfaces/discapacidad.interface").IDiscapacidades>;
}
