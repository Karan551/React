import conf from "../conf/config";
import { Client, Databases, Flag, ID, Query, Storage } from "appwrite";

export class Service {
    client = new Client();
    database;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.database = new Databases(this.client);

        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featureImage, status, userId }) {
        try {

            return await this.database.createDocument(

                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId
                }
            );

        } catch (error) {
            console.log("Error in createPost :", error);
        }
    }

    async updatePost(slug, { title, content, featureImage, status }) {
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status
                }


            );
        } catch (error) {
            console.log("Error is Update Post: ", error);
        }
    }


    async deletePost({ slug }) {
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Error in Delete Post: ", error);
            return false;
        }
    }


    async getPost({ slug, title }) {
        try {
            return await this.database.getDocument(

                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );

        } catch (error) {
            console.log("Error in Get Post :", error);
            return false;
        }
    }

    async allPost(queries = [Query.equal("status", "active")]) {
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("Error in All Post :", error);
        }
    }

    //  File Upload 
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Error in Uploading File :", error);
        }
    }


    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Error in Deleting File: ", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }




}

// To create a new object.

const appwriteService = new Service();
export default appwriteService;
