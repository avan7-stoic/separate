import React, { useState } from 'react';
import '/src/App.css';

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
        <div className="contact-container">
            <h1 className="contact-header">Contact Us</h1>
            {isSubmitted ? (
                <p className="contact-success">Thank you for reaching out! We will get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'input-error' : ''}
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'input-error' : ''}
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className={errors.message ? 'input-error' : ''}
                        />
                        {errors.message && <p className="error-message">{errors.message}</p>}
                    </div>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            )}
        </div>
    );
};

export default ContactUs;
