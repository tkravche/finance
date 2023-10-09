import { instance } from './walletURL';
import { setToken, clearToken } from './walletURL';

export async function loginUser(userData) {
    const { data } = await instance.post('/auth/sign-in', userData);
    setToken(data.token);
    return data;
}

export async function registerUser(userData) {
    const { data } = await instance.post('/auth/sign-up', userData);
    setToken(data.token);
    return data;
}

export async function logOutUser() {
    const { data } = await instance.delete('/auth/sign-out');
    clearToken();
    return data;
}

export async function currentUser() {
    const { data } = await instance.get('/users/current');
    return data;
}