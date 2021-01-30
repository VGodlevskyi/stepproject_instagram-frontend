import CoreService from "./CoreService";

export default class AuthService extends CoreService {
    constructor() {
        super();
        this.url = 'auth';
    }

    /**
     * @desc Создание пользователя
     * @property {String} first_name
     *
     * @return {Promise}
     **/
    async signUp({first_name, last_name, email, password}) {
        return this.postRequest(`${this.url}/signup`, {
            first_name,
            last_name,
            email,
            password
        });
    }

    async logIn({email, password}) {
        return this.postRequest(`${this.url}/login`, {
            email,
            password
        });
    }
}