import conf from "../conf/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    // 
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // call another method.
                return this.loginUser({ email, password });

            } else {
                return userAccount;
            }


        } catch (error) {
            throw error;

        }
    }


    async loginUser({ email, password }) {
        try {
            const response = await this.account.createEmailPasswordSession(email, password);
            return response;

        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }



    async logoutUser() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

// To Create an object.
const authService = new AuthService();

export default authService;