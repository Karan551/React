import { conf } from '../conf/config';
import { Client, Account, ID } from 'appwrite';

// To create a class
class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteURL)
            .setProject(conf.appWriteProjectID);

        this.account = new Account(this.client);
    }

    async createAccount({ name, email, password }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            //  here we will work more
            if (userAccount) {
                return this.login(email, password);
            } else {
                return userAccount;
            }

        } catch (error) {
            console.log("Error in account creation :: ", error);
            throw new Error(error);
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Error in account login :: ", error);
            throw new Error(error);
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service logout error :: ", error);
            throw new Error(error);
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Error in current user :: ", error);
            // throw new Error(error);
            // TODO: check again
        }
        return null;
    }
};


const authService = new AuthService();
export default authService;