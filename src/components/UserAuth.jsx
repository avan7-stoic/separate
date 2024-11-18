import React, { useState } from 'react';

const UserAuth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username_or_email: '', // For login input
        email: '',             // For signup input
        username: '',          // For signup input
        password: '',
        confirm_password: '',
    });

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({
            username_or_email: '',
            email: '',
            username: '',
            password: '',
            confirm_password: '',
        });
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isLogin) {
            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username_or_email: formData.username_or_email,
                        password: formData.password,
                    }),
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
                    body: JSON.stringify({
                        email: formData.email,
                        username: formData.username,
                        password: formData.password,
                    }),
                });
                const result = await response.json();
                console.log('Registration successful:', result);
            } catch (error) {
                console.error('Registration failed:', error);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-6 sm:px-12">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    {isLogin ? 'Login to Your Account' : 'Create Your Account'}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {isLogin ? (
                        <>
                            {/* Combined Email/Username Input for Login */}
                            <div>
                                <label htmlFor="username_or_email" className="block text-sm font-medium text-gray-700">
                                    Email or Username
                                </label>
                                <input
                                    type="text"
                                    id="username_or_email"
                                    name="username_or_email"
                                    value={formData.username_or_email}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Separate Username Input for Signup */}
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirm_password"
                                    name="confirm_password"
                                    value={formData.confirm_password}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <p className="text-sm text-gray-500 mt-4 text-center">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <button
                        onClick={toggleForm}
                        className="text-pink-500 font-medium hover:underline focus:outline-none"
                    >
                        {isLogin ? 'Sign Up' : 'Log In'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default UserAuth;
