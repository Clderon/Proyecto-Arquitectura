import axios from 'axios';

const API_URL = 'http://localhost:8000/api/'; // Asegúrate de que esta URL sea correcta

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

// Interceptor para añadir el token a las solicitudes
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Interceptor para refrescar el token cuando expira
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refresh = localStorage.getItem('refresh_token');
                const response = await axios.post(
                    `${API_URL}auth/token/refresh/`,
                    { refresh },
                );
                localStorage.setItem('access_token', response.data.access);
                axiosInstance.defaults.headers['Authorization'] =
                    `Bearer ${response.data.access}`;
                originalRequest.headers['Authorization'] =
                    `Bearer ${response.data.access}`;
                return axiosInstance(originalRequest);
            } catch (err) {
                console.error('No se pudo refrescar el token:', err);
                // Redirigir al usuario a la página de inicio de sesión o manejar el error
            }
        }
        return Promise.reject(error);
    },
);

export default axiosInstance;
