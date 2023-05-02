import axios from "axios";

export const httpinstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {"Content-Type": "application/json",}
})

httpinstance.interceptors.request.use(async (request)=>{
    const token = localStorage.getItem('accessToken');
    if(token) request.headers.Authorization = `Token ${token}` 
    return request
})

httpinstance.interceptors.response.use(async (responce)=>{
    return responce
}, async (error)=>{
    return Promise.reject(error)
})

export const httpinstancefile = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {"Content-Type": "multipart/form-data",}
})

httpinstancefile.interceptors.request.use(async (request)=>{
    const token = localStorage.getItem('accessToken');
    if(token) request.headers.Authorization = `Token ${token}`
    return request
})

httpinstancefile.interceptors.response.use(async (responce)=>{
    return responce
}, async (error)=>{
    return Promise.reject(error)
})
