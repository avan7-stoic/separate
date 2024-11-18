import React, { useState } from "react";
import Navbar from "./NavBar";

const Charity = () => {
  const [profile, setProfile] = useState({
    name: "",
    description: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setProfile(formData); // Update profile with form data
    setLoggedIn(true); // Set login status to true
    setFormData({ name: "", description: "" }); // Reset form fields
  };

  const handleLogout = () => {
    setProfile({ name: "", description: "" }); // Clear profile
    setLoggedIn(false); // Set login status to false
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="bg-gray-100 text-gray-900 py-12 px-6 md:px-16 lg:px-24">
        <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-8">
          Charities
        </h1>
      </div>

    </>
  );
};

export default Charity;
