import React, { useState } from 'react';

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [newBeneficiary, setNewBeneficiary] = useState({
    id: Date.now(),
    name: '',
    school: '',
    age: '',
    dateJoined: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBeneficiary((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setBeneficiaries((prev) => [...prev, newBeneficiary]); // Add new beneficiary to the list
    setNewBeneficiary({ id: Date.now(), name: '', school: '', age: '', dateJoined: '' }); // Reset form
  };

  return (
    <div>
      <h2>Beneficiaries</h2>
      <ul>
        {beneficiaries.map((beneficiary) => (
          <li key={beneficiary.id}>
            <strong>{beneficiary.name}</strong> - {beneficiary.school}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAdd}>
        <input
          name="name"
          placeholder="Name"
          value={newBeneficiary.name}
          onChange={handleChange}
          required
        />
        <input
          name="school"
          placeholder="School"
          value={newBeneficiary.school}
          onChange={handleChange}
          required
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={newBeneficiary.age}
          onChange={handleChange}
          required
        />
        <input
          name="dateJoined"
          type="date"
          value={newBeneficiary.dateJoined}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Beneficiary</button>
      </form>
    </div>
  );
};

export default Beneficiaries;
