import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
});

axiosInstance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },

    function (error) {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    function onFulfilled(response) {
        return response;
    },

    function onRejected(error) {
        return Promise.reject(error);
    },
);

export default axiosInstance;
