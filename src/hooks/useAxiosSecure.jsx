import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    // base url
    const axiosSecure = axios.create({
        baseURL: 'https://bistro-boss-server-mu-drab.vercel.app'
    })

    // interceptor
    useEffect(() => {

        // request
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config;
        });

        // response
        axiosSecure.interceptors.response.use(
            (response) => response, async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [logOut, navigate, axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSecure;