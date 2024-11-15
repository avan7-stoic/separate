import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setCharityProfile, toggleLogin } from './charitySlice';

const Charity = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.charity.profile);

  const handleSignUp = (e) => {
    e.preventDefault();
    const newProfile = {
      name: e.target.name.value,
      description: e.target.description.value,
    };
    dispatch(setCharityProfile(newProfile));
    dispatch(toggleLogin());
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
    </div>
  );
};

export default Charity;
