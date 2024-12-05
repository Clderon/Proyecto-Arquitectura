import '../Auth.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { Input, Button } from '../../../components/common';
import { validateForm } from '../Validation/validation';
import { login } from '../Api';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

        // Obtener los valores de los campos
        const currentEmail = e.target.email.value;
        const currentPassword = e.target.password.value;

        // Actualizar el estado
        setEmail(currentEmail);
        setPassword(currentPassword);

        // Validar el formulario
        const validationError = validateForm(email, password);

        if (validationError) {
            alert(validationError);
            return;
        }

        try {
            const data = await login(currentEmail, currentPassword);
            console.log('Login exitoso:', data);
            // Redirigir al usuario a la página principal o donde corresponda
            navigate('/dashboard');
        } catch (error) {
            alert(error.message);
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/register');
    };

    return (
        <div className="contenedor">
            <form className="login-form" action="" onSubmit={handleSubmit}>
                <h2>Iniciar sesión</h2>
                <div className="input-box">
                    <Input placeholder={'E-mail'} type="email" name="email" />
                    <MdEmail className="icon" />
                </div>

                <div className="input-box">
                    <Input
                        placeholder={'Contraseña'}
                        type="password"
                        name="password"
                    />
                    <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <label>
                        <Input type="checkbox" />
                        Recordar
                    </label>

                    <a href="http://localhost:3000/">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
                <Button>Iniciar sesión</Button>

                <div className="register-link">
                    <p>
                        ¿No tienes una cuenta?
                        <a href="/" onClick={handleRegister}>
                            Regístrate
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
}
