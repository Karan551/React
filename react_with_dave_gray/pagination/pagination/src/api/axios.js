import axios from "axios";

const axiosOne = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getPosts = async (pageNumber=1) => {
    const response = await axiosOne.get(`/posts?_page=${pageNumber}`);
    return response.data;
};

const axiosTwo = axios.create({
    baseURL: 'https://reqres.in/api'
});

export const getUsersPage = async (pageNumber) => {
    const response = await axiosTwo.get(`/users?page=${pageNumber}`);

    return response.data;
};