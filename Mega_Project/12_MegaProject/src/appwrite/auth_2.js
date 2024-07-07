import conf from "../conf/config";
import { Client, Account, ID } from "appwrite";


class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }


    //  To create a account.

    async createAccount({ email, password, name }) {
        try {
            const user = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            // This is shortcut to do this
            // return user ? this.loginUser({email,password}) : user;

            if (user) {
                return this.loginUser({ email, password });

            } else {
                return user;
            }


        } catch (error) {
            console.log("Error due to create Account", error.message);
            throw error;
        }

    }

    //  To login user
    async loginUser({ email, password }) {
        try {
            const login = await this.account.createEmailPasswordSession(email, password);

            return login;

        } catch (error) {
            console.log("Error during login account ", error.message);
            throw error;

        }
    }


    //  To Logout User
    async logoutUser() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Error Due to log out ", error);
            throw error;

        }
    }

    // 
    async getCurrentUser() {
        try {
            return await this.account.get();

        } catch (error) {
            console.log("Error During get current user", error.message);
            throw error;

        }

        return null;
    }
}

const authService = new AuthService();

export default authService;