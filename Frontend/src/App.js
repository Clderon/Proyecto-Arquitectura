import LoginForm from './features/Auth/LoginForm/LoginForm';
import RegisterForm from './features/Auth/RegisterForm/RegisterForm';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                {/* Agrega más rutas aquí */}
            </Routes>
        </Router>
    );
}

export default App;
