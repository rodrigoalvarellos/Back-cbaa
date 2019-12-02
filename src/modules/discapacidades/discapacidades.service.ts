import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDiscapacidades } from '../../interfaces/discapacidad.interface';
import { Model } from 'mongoose';
import { DiscapacidadDTO } from '../../dto/discapacidad.dto';

@Injectable()
export class DiscapacidadesService {

    constructor(@InjectModel('Discapacidades') private readonly discModel: Model<IDiscapacidades>) { }

    async createDiscapacidad(disc: DiscapacidadDTO) {
        const newDisc = new this.discModel(disc);
        return await newDisc.save();
    }

    async getAllDisc() {
        return await this.discModel.find({isActive: true});
    }

    async getDiscById(id: string ) {
        return await this.discModel.findById(id);
    }

    async updateDisc(id: string, disc: DiscapacidadDTO) {
        return await this.discModel.findOneAndUpdate(id, disc, { new: true });
    }

    async deleteDisc(id: string) {
        const userDeleted = await this.discModel.findById(id);
        userDeleted.isActive = false;
        return await userDeleted.save();
    }

}
