import CoreService from "./CoreService";

export default class APIService extends CoreService {
    constructor() {
        super();
        this.url = 'api';
    }

    async getUsers() {
        return this.getRequest(`${this.url}/users`);
    }

   }