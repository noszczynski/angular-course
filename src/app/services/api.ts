import axios from 'axios';
import tokenStorage from './tokenStorage';
import config from './apiConfig';

const api = axios.create({
    baseURL: config.api.spotify,
    maxRedirects: 0,
});

// tslint:disable-next-line:no-shadowed-variable
api.interceptors.request.use((config) => {
    const token = tokenStorage.get();

    if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;
