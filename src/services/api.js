import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://192.168.15.58:3333',
    baseURL: 'https://psl-back-end.herokuapp.com/'
});

export default api;