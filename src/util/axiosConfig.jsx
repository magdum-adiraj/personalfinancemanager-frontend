import axios from "axios";
import { BASE_URL } from "./apiEndpoints";

const axiosConfig = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

const excludeEndpoints = ["/login", "/register", "/status","/activate","/health"];

axiosConfig.interceptors.request.use(
    (config) => {
        const shouldSkipToken = excludeEndpoints.some((endpoint) => {
            return config.url?.includes(endpoint)
        });

        if (!shouldSkipToken) {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },(error) => {
        return Promise.reject(error);
    });

axiosConfig.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = "/login";
        } else if (error.response && error.response.status === 500) {
            console.error("Server error:", error.response.data);
            alert("An unexpected error occurred. Please try again later.");
        } else if (error.response && error.code === "ECONNABORTED") {
            console.error("Request timeout:", error.message);
            alert("The request took too long to complete. Please try again later.");
        }
        return Promise.reject(error);
    });

export default axiosConfig;