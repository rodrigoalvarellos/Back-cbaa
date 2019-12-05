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
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(user$, jwtService) {
        this.user$ = user$;
        this.jwtService = jwtService;
    }
    async validateUser(email, pass) {
        const user = await this.user$.getUserByEmail(email);
        if (user && bcrypt.compareSync(pass, user.password)) {
            return user;
        }
        return null;
    }
    async login(user) {
        const payload = { username: user.email, sub: user._id, data: JSON.stringify(user) };
        return { token: this.jwtService.sign(payload) };
    }
    async registerUser(register) {
        if (register.password !== register.confirmPassword) {
            throw new common_1.UnauthorizedException('Las contraseñas ingresadas no coinciden');
        }
        const existe = await this.user$.getUserByEmail(register.email);
        if (existe) {
            throw new common_1.UnauthorizedException('Usuario ya registrado con ese email');
        }
        const newUser = {
            email: register.email,
            password: register.password,
            nombre: null,
            apellido: null,
            foto: null,
            descripcion: null,
            role: 'USER_ROLE',
        };
        return await this.user$.createUser(newUser);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map