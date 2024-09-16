import axios from "axios"

const axiosOne = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async (page_number = 1) => {
    const response = await axiosOne.get(`/posts?_page=${page_number}`)
    return response.data
}