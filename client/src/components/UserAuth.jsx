import React, { useState } from 'react';
import '../App.css';

const UserAuth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: '', email: '', password: '', confirm_password: '' });

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({ username: '', email: '', password: '', confirm_password: '' }); // Reset form
    };

    /**
     * Handles input change events from the email, password, and name fields,
     * updating the formData state with the new values.
     * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
     */
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    /**
     * Handles form submission for login or signup.
     * Makes a fetch request to the appropriate API endpoint.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogin) {
            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username_or_email: formData.username, password: formData.password }),
                });
                const result = await response.json();
                console.log('Login successful:', result);
            } catch (error) {
                console.error('Login failed:', error);
            }
        } else {
            if (formData.password !== formData.confirm_password) {
                alert('Passwords do not match');
                return;
            }
            try {
                const response = await fetch('/api/auth/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                const result = await response.json();
                console.log('Registration successful:', result);
            } catch (error) {
                console.error('Registration failed:', error);
            }
        }
    };

    return (
        <div className="auth-container">
            {isLogin ? (
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="form-background"></div>
                    <div className="content">
                        <h1>Login to Your Account</h1>
                        <div className="form-group">
                            <label htmlFor="username_or_email">Username or Email:</label>
                            <input
                                type="text"
                                id="username_or_email"
                                name="username"
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <p>
                            Don't have an account? <a href="#" onClick={toggleForm}>Sign Up</a>
                        </p>
                    </div>
                </form>
            ) : (
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="form-background"></div>
                    <h1>Sign Up</h1>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required onChange={handleInputChange} />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required onChange={handleInputChange} />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required onChange={handleInputChange} />
                    <br />
                    <label htmlFor="confirm_password">Confirm Password:</label>
                    <input type="password" id="confirm_password" name="confirm_password" required onChange={handleInputChange} />
                    <br />
                    <input type="submit" value="Sign Up" />
                    <p>
                        Have an Account? <a href="#" onClick={toggleForm}>Log In</a>
                    </p>
                </form>
            )}
        </div>
    );
};

export default UserAuth;
