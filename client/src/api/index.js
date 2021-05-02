import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${BASE_URL}/posts`);
export const createPost = post => axios.post(`${BASE_URL}/posts`, post);
export const updatePost = (id, post) => axios.patch(`${BASE_URL}/posts/${id}`, post);
export const deletePost = id => axios.delete(`${BASE_URL}/posts/${id}`);
export const likePost = id => axios.patch(`${BASE_URL}/posts/${id}/like`);
