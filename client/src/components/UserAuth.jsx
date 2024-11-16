import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from './store/authSlice'; // Redux actions
import './App.css';

const UserAuth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: '', email: '', password: '', confirm_password: '' });
    const dispatch = useDispatch();

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogin) {
            dispatch(loginUser({ username_or_email: formData.username, password: formData.password }));
        } else {
            if (formData.password !== formData.confirm_password) {
                alert("Passwords do not match");
                return;
            }
            dispatch(registerUser(formData));
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
                            <input type="text" id="username_or_email" name="username_or_email" required onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required onChange={handleInputChange} />
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <p>Don't have an account? <a href="#" onClick={toggleForm}>Sign Up</a></p>
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
                    <p>Have an Account? <a href="#" onClick={toggleForm}>Log In</a></p>
                </form>
            )}
        </div>
    );
};

export default UserAuth;
