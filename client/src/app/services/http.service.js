import axios from 'axios';
import config from '../config.json';
import authService from './auth.servise';
import localStorageService from './localStorage.service';

axios.defaults.baseURL = config.apiEndpoint;

axios.interceptors.request.use(
    async function (config) {
        const expiresDate = localStorageService.getExpiresDate();
        const refreshToken = localStorageService.getRefreshToken();
        const isExpired = refreshToken && expiresDate < Date.now();
        if (isExpired) {
            const data = await authService.refresh();

            localStorageService.setTokens(data);
        }
        const accessToken = localStorageService.getAccessToken();
        if (accessToken) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${accessToken}`,
            };
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
};
export default httpService;
