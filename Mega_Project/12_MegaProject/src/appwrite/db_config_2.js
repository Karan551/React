import conf from "../conf/config";
import { Client, Databases, Query, Storage } from "appwrite";


class Service {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);

        this.storage = new Storage(this.client);
    }


    // Data base related service

    async createPost({ title, slug, content, fetaturedImage, status, userId }) {
        try {

            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    fetaturedImage,
                    status,
                    userId,


                }

            );
        } catch (error) {
            console.log("Appwrite service ::createPost :: error", error);
        }
    }

    async updatePost(slug, { title, content, fetaturedImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    fetaturedImage,
                    status,
                }

            );
        } catch (error) {
            console.log("Appwrite service ::updatePost :: error", error);

        }
    }


    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );

            return true;

        } catch (error) {
            console.log("Appwrite service ::deletePost :: error", error);
            return false;
        }
    }


    async getPost(slug) {
        try {
            await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Appwrite service ::getPost :: error", error);
            return false;
        }
    }

    async allPosts() {
        try {
            this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal("status", "active")
                ]
            );
        } catch (error) {
            console.log("Appwrite service ::allPosts :: error", error);
            return false;
        }
    }


    //  File Upload Service 

    async uploadFile(file){
        try {
           await this.storage.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
           ) 
        } catch (error) {
            console.log("Appwrite service ::uploadFile :: error", error);
        }
    }

    async deleteFile(){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                // yahan update karana light gyi
            )
        } catch (error) {
            console.log("Appwrite service ::deleteFile :: error", error);
        }
    }

}


const dbService = new Service();

export default dbService;