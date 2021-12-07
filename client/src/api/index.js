import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {

  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

  return req;
});
//Football
export const fetchFootballPlayerPost = (id) => API.get(`/footballPlayers/${id}`);
export const fetchFootballPlayersPosts = () => API.get('/footballPlayers');
export const fetchFootballPlayerPostsByPosition = (footballPosition) => API.get(`/footballPlayers/footballPosition?footballPosition=${footballPosition}`);
export const createFootballPlayersPost = (newPlayerPost) => API.post('/footballPlayers', newPlayerPost);
export const updateFootballPlayersPost = (id, updatedPlayerPost) => API.patch(`/footballPlayers/${id}`, updatedPlayerPost);
export const deleteFootballPlayersPost = (id) => API.delete(`/footballPlayers/${id}`);
//basketball
export const fetchPlayerPost = (id) => API.get(`/basketPlayers/${id}`);
export const fetchPlayersPosts = () => API.get('/basketPlayers');
export const fetchPlayerPostsByPosition = (position) => API.get(`/basketPlayers/position?position=${position}`);
export const createPlayersPost = (newPlayerPost) => API.post('/basketPlayers', newPlayerPost);
export const updatePlayersPost = (id, updatedPlayerPost) => API.patch(`/basketPlayers/${id}`, updatedPlayerPost);
export const deletePlayersPost = (id) => API.delete(`/basketPlayers/${id}`);
//Homepage
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
//Auth
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
