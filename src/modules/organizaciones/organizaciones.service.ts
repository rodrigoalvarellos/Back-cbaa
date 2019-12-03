import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IOrganizacion } from '../../interfaces/organizacion.interface';
import { OrganizacionDTO } from '../../dto/organizacion.dto';

@Injectable()
export class OrganizacionesService {

    constructor(@InjectModel('Organizacion') private readonly orgModel: Model<IOrganizacion>) {}

    async createOrganizacion( organizacion: OrganizacionDTO) {
        const newOrganizacion = new this.orgModel(organizacion);
        return await newOrganizacion.save();
    }

    async getAll() {
        return await this.orgModel.find({isActive: true})
            .populate('categorias', 'nombre icono')
            .exec();
    }

    async getFilteredByCategoria( id: string ) {

        return await this.orgModel
            .find({ categorias: id })
            .populate('categorias', 'nombre icono')
            .exec();
    }

}
