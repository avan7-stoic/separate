import React from "react";
import Navbar from "./NavBar";

const AboutUs = () => {
    return (

        <>
            <Navbar />
            <br /><br />
            <div className="bg-gray-100 text-gray-900 py-12 px-6 md:px-16 lg:px-24">
                {/* Header */}
                <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-8">
                    About Inua Wasichana
                </h1>

                {/* Mission Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-pink-500 mb-4">
                        Our Mission
                    </h2>
                    <p className="text-base leading-relaxed text-gray-700">
                        At <strong>Inua Wasichana</strong>, we believe that access to menstrual
                        hygiene products should not be a barrier to education. Our platform
                        is designed to address the high rates of school absenteeism among
                        girls in Sub-Saharan Africa due to a lack of sanitary supplies. We aim
                        to create sustainable support for these girls by enabling regular
                        donations to charities focused on menstrual hygiene and related
                        needs.
                    </p>
                </section>

                {/* Problem Statement Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-pink-500 mb-4">
                        Problem Statement
                    </h2>
                    <p className="text-base leading-relaxed text-gray-700">
                        In many Sub-Saharan countries, girls from disadvantaged backgrounds
                        miss up to <strong>20% of their school days</strong> due to the lack
                        of access to sanitary towels. For primary school students, this can
                        mean up to <strong>18 weeks</strong> of missed classes out of 108,
                        and for high school students, nearly <strong>24 weeks</strong> out of
                        144. This gap not only affects their academic progress but also
                        limits their future opportunities.
                    </p>
                </section>

                {/* Solution Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-pink-500 mb-4">
                        Our Solution
                    </h2>
                    <p className="text-base leading-relaxed text-gray-700 mb-4">
                        The <strong>Inua Wasichana</strong> platform empowers donors to make a
                        meaningful difference by providing a streamlined, automated way to
                        support menstrual hygiene initiatives. Key features of our platform
                        include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>
                            <strong>Regular Donations:</strong> Set up automated donations
                            (e.g., monthly or annually) to ensure sustained support for girls in
                            need.
                        </li>
                        <li>
                            <strong>Anonymous Giving:</strong> Choose to donate anonymously or
                            with acknowledgment.
                        </li>
                        <li>
                            <strong>Donation Reminders:</strong> Receive gentle reminders to
                            donate and keep up the momentum of support.
                        </li>
                        <li>
                            <strong>Stories of Impact:</strong> Learn more about the
                            beneficiaries and see the impact of your contributions firsthand.
                        </li>
                    </ul>
                </section>

                {/* Join Us Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-pink-500 mb-4">Join Us</h2>
                    <p className="text-base leading-relaxed text-gray-700 mb-6">
                        Together, we can break down the barriers to education for girls in
                        Sub-Saharan Africa. By becoming a regular donor, you’ll be
                        contributing to a future where every girl can attend school with
                        dignity, health, and confidence. Support <strong>Inua Wasichana</strong> and
                        help us make a lasting difference.
                    </p>
                    <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-center">
                        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 mb-4 md:mb-0">
                            Support Our Cause
                        </button>
                        <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
                            Get Involved
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUs;
