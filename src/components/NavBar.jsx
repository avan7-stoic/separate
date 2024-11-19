import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false);
    const [signInDropdownOpen, setSignInDropdownOpen] = useState(false);

    const toggleDropdown = (type) => {
        if (type === "register") {
            setRegisterDropdownOpen(!registerDropdownOpen);
            setSignInDropdownOpen(false); // Close sign-in dropdown if open
        } else {
            setSignInDropdownOpen(!signInDropdownOpen);
            setRegisterDropdownOpen(false); // Close register dropdown if open
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 flex justify-between items-center shadow-md z-50">
            {/* Logo */}
            <div className="logo text-2xl font-bold tracking-wide text-pink-500">
                Tuinue Wasichana
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex space-x-6">
                <li>
                    <Link to="/" className="hover:text-pink-400 transition">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/charities" className="hover:text-pink-400 transition">
                        Charities
                    </Link>
                </li>
                <li>
                    <a href="/#our-mission-and-impact" className="hover:text-pink-400 transition">
                        Our Impact
                    </a>
                </li>
                <li>
                    <Link to="/about" className="hover:text-pink-400 transition">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-pink-400 transition">
                        Contact Us
                    </Link>
                </li>
            </ul>

            {/* Auth Buttons */}
            <div className="relative flex items-center space-x-4">
                {/* Sign In Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown("signIn")}
                        className="bg-gray-700 py-2 px-4 rounded hover:bg-pink-600 transition"
                    >
                        Sign In
                    </button>
                    {signInDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded shadow-lg">
                            <ul>
                                <li>
                                    <Link
                                        to="/donor"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Donor Sign In
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/charities"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Charity Sign In
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/admin"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Admin Sign In
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Register Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown("register")}
                        className="bg-pink-500 py-2 px-4 rounded hover:bg-pink-600 transition"
                    >
                        Register
                    </button>
                    {registerDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded shadow-lg">
                            <ul>
                                <li>
                                    <Link
                                        to="/donor-register"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Register as Donor
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/charity-register"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Register as Charity
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
