import BaseHttpService from "./http.service";
import { RegisterData } from "../models/register-data.model";
import { LoginCredential } from "../models/login-credential.model";

export default class AuthService extends BaseHttpService {

    async signup(data: RegisterData) {
        await this.post('api/v1/register', data);
    }

    async signin(loginCredential: LoginCredential) {
        const result: any = await this.post('api/v1/login', loginCredential);
        const accessToken = result.data.accessToken;
        this.saveToken(accessToken);
        return result.data.username;
    }

    async signout() {
        this.removeToken();
    }
}