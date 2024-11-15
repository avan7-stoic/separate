import React, { useState } from 'react';
import { useSignIn, useAuthUser, useIsAuthenticated } from 'react-auth-kit';
import '/src/App.css';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ email: '', password: '', name: '' });
    const signIn = useSignIn();

    const toggleAuthMode = () => {
        setIsLogin((prevMode) => !prevMode);
        setFormData({ email: '', password: '', name: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleAuth = async (e) => {
        e.preventDefault();

        if (isLogin) {
            // Handle login with react-auth-kit
            const success = signIn({
                token: 'fakeToken', // Replace with actual token from backend
                expiresIn: 3600,
                tokenType: 'Bearer',
                authState: { email: formData.email },
            });
            if (success) {
                console.log('Logged in successfully');
            } else {
                alert('Login failed');
            }
        } else {
            // Handle registration (send data to your backend, and then log in)
            // Simulating registration success and login here
            const success = signIn({
                token: 'fakeToken',
                expiresIn: 3600,
                tokenType: 'Bearer',
                authState: { email: formData.email },
            });
            if (success) {
                console.log('Registered and logged in successfully');
            } else {
                alert('Registration failed');
            }
        }
    };

    return (
        <div className="auth-container">
            <h1>{isLogin ? 'Login' : 'Register'}</h1>
            <form onSubmit={handleAuth} className="auth-form">
                {!isLogin && (
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
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
                <button type="submit" className="auth-button">
                    {isLogin ? 'Login' : 'Register'}
                </button>
            </form>
            <button onClick={toggleAuthMode} className="toggle-button">
                {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
            </button>
        </div>
    );
};

export default AuthPage;
