import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, logOut } from '../redux/slices/charitySlice.js';

const Charity = () => {
  const dispatch = useDispatch();
  const { name, description, loggedIn } = useSelector((state) => state.charity);

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
    dispatch(signUp(formData));  
  };

  function handleLogout() {
        dispatch(logOut());
    }

  return (
    <div className="text-center p-8 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <h2 className="text-4xl font-bold text-white mb-6">Charity Portal</h2>

      {!loggedIn ? (
        <form onSubmit={handleSignUp} className="mb-8 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Charity Name"
              required
              className="p-3 mb-3 w-full max-w-xs rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Charity Description"
              required
              className="p-3 mb-3 w-full max-w-xs h-32 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-700 text-white py-3 px-6 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          >
            Sign Up
          </button>
        </form>
      ) : (
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Charity Profile</h3>
          <p className="text-xl mb-2">
            <strong>Name:</strong> {name || "N/A"}
          </p>
          <p className="text-xl mb-2">
            <strong>Description:</strong> {description || "N/A"}
          </p>
          <p className="text-xl mb-4">
            <strong>Status:</strong> {loggedIn ? "Logged In" : "Logged Out"}
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Charity;
