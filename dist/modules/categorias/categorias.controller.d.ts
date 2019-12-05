import { CategoriasService } from './categorias.service';
import { CategoriaDTO } from '../../dto/categoria.dto';
export declare class CategoriasController {
    private categ$;
    constructor(categ$: CategoriasService);
    getAll(): Promise<import("../../interfaces/categoria.interface").ICategoria[]>;
    getDiscById(id: string): Promise<import("../../interfaces/categoria.interface").ICategoria>;
    createDisc(categ: CategoriaDTO): Promise<import("../../interfaces/categoria.interface").ICategoria>;
    updateDisc(id: string, categ: CategoriaDTO): Promise<import("../../interfaces/categoria.interface").ICategoria>;
    deleteUser(id: string): Promise<import("../../interfaces/categoria.interface").ICategoria>;
}
