import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBeneficiary } from '../redux/slices/charitySlice.js'; 

const Beneficiaries = () => {
  const beneficiaries = useSelector((state) => state.charity.beneficiaries);
  const dispatch = useDispatch();

  const [newBeneficiary, setNewBeneficiary] = useState({
    id: Date.now(),
    name: '',
    school: '',
    age: '',
    dateJoined: '',
  });

  const handleChange = (e) => {
    setNewBeneficiary({ ...newBeneficiary, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addBeneficiary(newBeneficiary));
    setNewBeneficiary({ id: Date.now(), name: '', school: '', age: '', dateJoined: '' });
  };

  return (
    <div>
      <h2>Beneficiaries</h2>
      <ul>
        {beneficiaries.map((beneficiary) => (
          <li key={beneficiary.id}>
            {beneficiary.name} - {beneficiary.school}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAdd}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="school" placeholder="School" onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
        <input name="dateJoined" type="date" onChange={handleChange} required />
        <button type="submit">Add Beneficiary</button>
      </form>
    </div>
  );
};

export default Beneficiaries;
