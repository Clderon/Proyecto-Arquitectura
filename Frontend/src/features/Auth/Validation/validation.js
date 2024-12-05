export const validateForm = (email, password) => {
    if (!email || !password) {
        return 'Por favor, complete todos los campos.';
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zAZ0-9]{2,6}$/;
    if (!emailRegex.test(email)) {
        return 'El formato del correo electrónico no es válido.';
    }
    if (password.length < 8) {
        return 'La contraseña debe tener al menos 8 caracteres.';
    }
    return null;
};
