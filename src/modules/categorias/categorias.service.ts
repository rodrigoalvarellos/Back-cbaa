import { Injectable } from '@nestjs/common';
import { ICategoria } from '../../interfaces/categoria.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CategoriaDTO } from '../../dto/categoria.dto';

@Injectable()
export class CategoriasService {

    constructor(@InjectModel('Categorias') private readonly categModel: Model<ICategoria>) { }

    async createCategoria(categ: CategoriaDTO) {
        const newCateg = new this.categModel(categ);
        return await newCateg.save();
    }

    async getAllCateg() {
        return await this.categModel.find({isActive: true});
    }

    async getCategById(id: string ) {
        return await this.categModel.findById(id);
    }

    async updateCateg(id: string, categ: CategoriaDTO) {
        return await this.categModel.findOneAndUpdate(id, categ, { new: true });
    }

    async deleteCateg(id: string) {
        const categDeleted = await this.categModel.findById(id);
        categDeleted.isActive = false;
        return await categDeleted.save();
    }
}
