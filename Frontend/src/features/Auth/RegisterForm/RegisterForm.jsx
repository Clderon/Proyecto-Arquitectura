import '../Auth.css';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaLock, FaUser } from 'react-icons/fa';
import React, { useState } from 'react';
import { Input, Button, Select } from '../../../components/common';

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        correo: '',
        genero: '',
        contraseña: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        navigate('/');
    };
    return (
        <div className="contenedor">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Registrarse</h2>

                <div className="input-box">
                    <Input
                        placeholder={'Nombre'}
                        type="text"
                        onChange={handleChange}
                        name="nombres"
                    />

                    <FaUser className="icon" />
                </div>

                <div className="input-box">
                    <Input
                        placeholder={'Apellidos'}
                        type="text"
                        onChange={handleChange}
                        name="apellidos"
                    />

                    <FaUser className="icon" />
                </div>

                <div className="input-box">
                    <Input
                        placeholder={'E-mail'}
                        type="email"
                        onChange={handleChange}
                        name="correo"
                    />

                    <MdEmail className="icon" />
                </div>

                <div className="input-box">
                    <Select
                        placeholder="Seleccionar genero"
                        options={[
                            { value: 'male', label: 'Masculino' },
                            { value: 'female', label: 'Femenino' },
                            { value: 'other', label: 'Otro' },
                        ]}
                        onChange={handleChange}
                        name={'genero'}
                    />
                </div>

                <div className="input-box">
                    <Input
                        placeholder={'Contraseña'}
                        type="password"
                        onChange={handleChange}
                        name="contraseña"
                    />

                    <FaLock className="icon" />
                </div>

                <Button>Register</Button>
            </form>
        </div>
    );
}
