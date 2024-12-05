import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth/'; // Asegúrate de que esta URL sea correcta

// Función para iniciar sesión
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}login/`, {
            email,
            password,
        });
        if (response.data.access) {
            // Guardar los tokens en el localStorage o en otro lugar seguro
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
        }
        return response.data;
    } catch (error) {
        // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
        if (error.response && error.response.data) {
            throw new Error(
                error.response.data.detail || 'Error en el inicio de sesión',
            );
        } else {
            throw new Error('Error en el inicio de sesión');
        }
    }
};

// Función para refrescar el token
export const refreshToken = async () => {
    try {
        const refresh = localStorage.getItem('refresh_token');
        const response = await axios.post(`${API_URL}token/refresh/`, {
            refresh,
        });
        localStorage.setItem('access_token', response.data.access);
        return response.data;
    } catch (error) {
        throw new Error('No se pudo refrescar el token');
    }
};
