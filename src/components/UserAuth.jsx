import React, { useState } from 'react';
import '/src/App.css';

const UserAuth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-container">
            {isLogin ? (
                <form className="form-container" action="process_login.php" method="post">
                    <div className="form-background"></div>
                    <div className="content">
                        <h1>Login to Your Account</h1>
                        <div className="form-group">
                            <label htmlFor="username_or_email">Username or Email:</label>
                            <input type="text" id="username_or_email" name="username_or_email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <p>Don't have an account? <a href="#" onClick={toggleForm}>Sign Up</a></p>
                    </div>
                </form>
            ) : (
                <div className="form-container">
                    <form action="process_registration.php" method="post" className="form">
                        <div className="form-background"></div>
                        <h1>Sign Up</h1>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                        <br />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <br />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                        <br />
                        <label htmlFor="confirm_password">Confirm Password:</label>
                        <input type="password" id="confirm_password" name="confirm_password" required />
                        <br />
                        <input type="submit" value="Sign Up" />
                        <p>Have an Account? <a href="#" onClick={toggleForm}>Log In</a></p>
                    </form>
                </div>
            )}
        </div>
    );
};

export default UserAuth;
