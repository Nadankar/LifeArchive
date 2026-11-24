import api from "./api";

import { saveToken, removeToken, getToken } from "./storage";

export const registerUser = async (data: {
    name: string,
    email: string,
    password: string
}) => {
    const response = await api.post('/register', data);

    await saveToken(response.data.token);

    return response.data;
}

export const loginUser = async (data: {
    email: string,
    password: string
}) => {
    const response = await api.post('/login', data);

    await saveToken(response.data.token);

    return response.data;
}


export const logoutUser = async (data: {
    email: string,
    password: string
}) => {
    const response = await api.post('/logout', data);

    await removeToken();
}


export const getCurrentUser=async()=>{

    const response=await api.get('/user');

    return response.data;

}