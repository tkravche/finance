import axios from 'axios';

const baseURL = 'https://wallet.goit.ua/api';

export const instance = axios.create ({baseURL});

export const setToken = token => 
    instance.defaults.headers.Authorization = `Bearer ${token}`;

export const clearToken = () => 
    instance.defaults.headers.Authorization = '';