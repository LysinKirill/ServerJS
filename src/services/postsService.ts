import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getPostById = async (id: number) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};