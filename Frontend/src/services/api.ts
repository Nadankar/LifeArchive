import axios from "axios"
import { getToken } from "./storage";
import { type InternalAxiosRequestConfig } from "axios";

const api=axios.create({
    baseURL: "http://localhost:8000/api",
    headers:{
        Accept:"application/json"
    },
    timeout:10000
});

api.interceptors.request.use(async(config:InternalAxiosRequestConfig)=>{
    const token =await getToken();

    if(token){
        config.headers.Authorization=`Bearer ${token}`;
    } 

    return config;
})

export default api;



