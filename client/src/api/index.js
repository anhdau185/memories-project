import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${BASE_URL}/posts`);
export const createPost = post => axios.post(`${BASE_URL}/posts`, post);
