import axios from 'axios';

const instatnse = axios.create({
    baseURL: 'http://localhost:4444',
});

export default instatnse;