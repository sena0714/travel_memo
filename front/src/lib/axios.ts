import axios from 'axios';

export const axiosApi = axios.create({
    baseURL: 'http://192.168.20.153:8082',
    withCredentials: true,
})