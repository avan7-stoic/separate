import React, { useState } from 'react';
import Navbar from './NavBar';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitted(true);
            // Here, you'd typically send the form data to your backend.
            console.log('Form submitted:', formData);
        }
    };

    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-600 mb-6">Contact Us</h1>
                {isSubmitted ? (
                    <p className="text-center text-green-600 text-xl">Thank you for reaching out! We will get back to you soon.</p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Input */}
                        <div className="form-group">
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full p-3 border-2 rounded-lg focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        {/* Email Input */}
                        <div className="form-group">
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full p-3 border-2 rounded-lg focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Subject Input */}
                        <div className="form-group">
                            <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full p-3 border-2 rounded-lg focus:outline-none border-gray-300 focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Message Textarea */}
                        <div className="form-group">
                            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full p-3 border-2 rounded-lg focus:outline-none ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500`}
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </>
    );
};

export default ContactUs;
