import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://locahost:8000',
});

export default instance;