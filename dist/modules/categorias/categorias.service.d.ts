import { ICategoria } from '../../interfaces/categoria.interface';
import { Model } from 'mongoose';
import { CategoriaDTO } from '../../dto/categoria.dto';
export declare class CategoriasService {
    private readonly categModel;
    constructor(categModel: Model<ICategoria>);
    createCategoria(categ: CategoriaDTO): Promise<ICategoria>;
    getAllCateg(): Promise<ICategoria[]>;
    getCategById(id: string): Promise<ICategoria>;
    updateCateg(id: string, categ: CategoriaDTO): Promise<ICategoria>;
    deleteCateg(id: string): Promise<ICategoria>;
}
