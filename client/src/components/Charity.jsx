import React, { useState } from 'react';

const Charity = () => {
  // Local state to manage the charity profile
  const [profile, setProfile] = useState({
    name: '',
    description: '',
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const newProfile = {
      name: e.target.name.value,
      description: e.target.description.value,
    };
    setProfile(newProfile); // Update the local profile state
    setLoggedIn(true); // Simulate a login toggle
  };

  return (
    <div>
      <h2>Charity Portal</h2>
      <form onSubmit={handleSignUp}>
        <input type="text" name="name" placeholder="Charity Name" required />
        <textarea name="description" placeholder="Charity Description" required></textarea>
        <button type="submit">Sign Up</button>
      </form>
      <h3>Profile</h3>
      <p>Name: {profile.name}</p>
      <p>Description: {profile.description}</p>
      <p>Status: {loggedIn ? "Logged In" : "Logged Out"}</p>
    </div>
  );
};

export default Charity;
