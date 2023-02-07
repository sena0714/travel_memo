import axios from 'axios';

export const axiosApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

export const axiosApiFromServerSide = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL_FROM_SERVER_SIDE,
    withCredentials: true,
});