import axios from 'axios';

const instatnse = axios.create({
    baseURL: 'http://localhost:4444',
});

instatnse.interceptors.request.use(( config ) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
});

export default instatnse;