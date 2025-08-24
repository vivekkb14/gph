import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../utils/auth';
import './Login.css';

// Predefined credentials
const VALID_CREDENTIALS = {
    username: 'admin',
    password: 'gph@123'
};

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        redirectUrl: '/admin' // Redirect to admin dashboard
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (error) setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formData.username === VALID_CREDENTIALS.username && 
            formData.password === VALID_CREDENTIALS.password) {
            login(); // Set authentication status
            navigate(formData.redirectUrl); // Redirect to add products page
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-header">
                <button onClick={() => navigate('/')} className="back-to-site">
                    Back to Main Site
                </button>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Admin Login</h1>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default Login;
