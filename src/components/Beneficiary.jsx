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
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Beneficiaries</h2>

      <ul className="mb-6 space-y-4">
        {beneficiaries.map((beneficiary) => (
          <li key={beneficiary.id} className="p-4 border rounded-md shadow-sm bg-gray-50">
            <strong className="text-xl text-purple-700">{beneficiary.name}</strong>
            <div className="text-sm text-gray-600">
              School: {beneficiary.school}
            </div>
            <div className="text-sm text-gray-600">
              Age: {beneficiary.age} | Date Joined: {new Date(beneficiary.dateJoined).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={handleAdd} className="space-y-4">
        <div>
          <input
            name="name"
            placeholder="Name"
            value={newBeneficiary.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <input
            name="school"
            placeholder="School"
            value={newBeneficiary.school}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <input
            name="age"
            type="number"
            placeholder="Age"
            value={newBeneficiary.age}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <input
            name="dateJoined"
            type="date"
            value={newBeneficiary.dateJoined}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        >
          Add Beneficiary
        </button>
      </form>
    </div>
  );
};

export default Beneficiaries;
