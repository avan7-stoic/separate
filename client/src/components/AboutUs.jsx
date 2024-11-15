import React from 'react';
import '/src/App.css';

const AboutUs = () => {
    return (
        <div className="container">
            <h1 className="header">About Inua Wasichana</h1>

            <section className="section">
                <h2 className="subHeader">Our Mission</h2>
                <p className="paragraph">
                    At Inua Wasichana, we believe that access to menstrual hygiene products should not be a barrier to education.
                    Our platform is designed to address the high rates of school absenteeism among girls in Sub-Saharan Africa due
                    to a lack of sanitary supplies. We aim to create sustainable support for these girls by enabling regular
                    donations to charities focused on menstrual hygiene and related needs.
                </p>
            </section>

            <section className="section">
                <h2 className="subHeader">Problem Statement</h2>
                <p className="paragraph">
                    In many Sub-Saharan countries, girls from disadvantaged backgrounds miss up to 20% of their school days due
                    to the lack of access to sanitary towels. For primary school students, this can mean up to 18 weeks of missed
                    classes out of 108, and for high school students, nearly 24 weeks out of 144. This gap not only affects their
                    academic progress but also limits their future opportunities.
                </p>
            </section>

            <section className="section">
                <h2 className="subHeader">Our Solution</h2>
                <p className="paragraph">
                    The <strong>Inua Wasichana</strong> platform empowers donors to make a meaningful difference by providing a
                    streamlined, automated way to support menstrual hygiene initiatives. Key features of our platform include:
                </p>
                <ul className="list">
                    <li>Regular Donations: Set up automated donations (e.g., monthly or annually) to ensure sustained support for girls in need.</li>
                    <li>Anonymous Giving: Choose to donate anonymously or with acknowledgment.</li>
                    <li>Donation Reminders: Receive gentle reminders to donate and keep up the momentum of support.</li>
                    <li>Stories of Impact: Learn more about the beneficiaries and see the impact of your contributions firsthand.</li>
                </ul>
            </section>

            <section className="section">
                <h2 className="subHeader">Join Us</h2>
                <p className="paragraph">
                    Together, we can break down the barriers to education for girls in Sub-Saharan Africa. By becoming a regular
                    donor, you’ll be contributing to a future where every girl can attend school with dignity, health, and
                    confidence. Support Inua Wasichana and help us make a lasting difference.
                </p>
                <div className="buttonContainer">
                    <button className="button">Support Our Cause</button>
                    <button className="button alternate">Get Involved</button>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
