"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DiscapacidadesService = class DiscapacidadesService {
    constructor(discModel) {
        this.discModel = discModel;
    }
    async createDiscapacidad(disc) {
        const newDisc = new this.discModel(disc);
        return await newDisc.save();
    }
    async getAllDisc() {
        return await this.discModel.find({ isActive: true });
    }
    async getDiscById(id) {
        return await this.discModel.findById(id);
    }
    async updateDisc(id, disc) {
        return await this.discModel.findOneAndUpdate(id, disc, { new: true });
    }
    async deleteDisc(id) {
        const userDeleted = await this.discModel.findById(id);
        userDeleted.isActive = false;
        return await userDeleted.save();
    }
};
DiscapacidadesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Discapacidades')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DiscapacidadesService);
exports.DiscapacidadesService = DiscapacidadesService;
//# sourceMappingURL=discapacidades.service.js.map