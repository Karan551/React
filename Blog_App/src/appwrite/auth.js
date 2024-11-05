import { conf } from '../conf/config';
import { Client, Account, ID, Query } from 'appwrite';

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

            console.log("This is user account :: in Appwrite service::", userAccount);

            if (userAccount) {
                return this.login({ email, password });
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
            const result = await this.account.deleteSessions();
            console.log("This is appwrite logout result::", result);
            return { message: "Successfully Logged Out", status: true };
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

    async checkUser(email) {
        try {
            return this.account.listIdentities(
                [
                    Query.select("email", email)
                ]
            );
        } catch (error) {
            console.log("Error in appwrite service :: checkuser::", error.message);
        }
    }

    async phoneLogin({ phoneNumber }) {
        try {
            const token = this.account.createPhoneToken(ID.unique(), phoneNumber);
            return token.userId;
        } catch (error) {
            console.log("Error in appwrite service :: phone Login::", error.message);
        }
    }
};


const authService = new AuthService();
export default authService;