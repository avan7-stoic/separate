import React, { useState } from "react";
import Navbar from "./NavBar";

const CharityDashboard = () => {
    const [applicationStatus, setApplicationStatus] = useState("pending"); // 'pending', 'approved', or 'rejected'
    const [charityDetails, setCharityDetails] = useState({});
    const [donors, setDonors] = useState([
        { name: "John Doe", amount: 5000, anonymous: false },
        { name: "Anonymous", amount: 1500, anonymous: true },
        { name: "Emily Clark", amount: 10000, anonymous: false },
        { name: "Anonymous", amount: 3000, anonymous: true },
    ]);
    const [beneficiaries, setBeneficiaries] = useState([]);
    const [stories, setStories] = useState([]);

    const totalDonations = donors.reduce((sum, donor) => sum + donor.amount, 0);
    const anonymousDonors = donors.filter((donor) => donor.anonymous);
    const totalAnonymousDonors = anonymousDonors.length;
    const totalAnonymousDonations = anonymousDonors.reduce(
        (sum, donor) => sum + donor.amount,
        0
    );

    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <div className="dashboard-container flex flex-wrap gap-6 p-6">
                {/* Left Section */}
                <div className="left-panel flex-grow lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Charity Dashboard</h1>

                    {/* Donations Overview */}
                    <div className="donations-overview mb-6">
                        <h2 className="text-lg font-semibold mb-2">Donations Overview</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-100 rounded shadow">
                                <h3 className="text-sm font-medium text-gray-600">Total Donations</h3>
                                <p className="text-xl font-bold">${totalDonations.toFixed(2)}</p>
                            </div>
                            <div className="p-4 bg-gray-100 rounded shadow">
                                <h3 className="text-sm font-medium text-gray-600">Anonymous Donations</h3>
                                <p className="text-xl font-bold">${totalAnonymousDonations.toFixed(2)}</p>
                                <p className="text-sm text-gray-500">{totalAnonymousDonors} Transactions</p>
                            </div>
                        </div>
                    </div>

                    {/* Beneficiaries Section */}
                    <div className="beneficiaries mb-6">
                        <h2 className="text-lg font-semibold mb-2">Beneficiaries</h2>
                        <ul className="list-disc pl-5 text-gray-700">
                            {beneficiaries.length > 0 ? (
                                beneficiaries.map((beneficiary, index) => (
                                    <li key={index}>{beneficiary}</li>
                                ))
                            ) : (
                                <p>No beneficiaries added yet.</p>
                            )}
                        </ul>
                    </div>

                    {/* Stories Section */}
                    <div className="stories">
                        <h2 className="text-lg font-semibold mb-2">Beneficiary Stories</h2>
                        <ul className="list-disc pl-5 text-gray-700">
                            {stories.length > 0 ? (
                                stories.map((story, index) => (
                                    <li key={index}>{story}</li>
                                ))
                            ) : (
                                <p>No stories shared yet.</p>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Right Section */}
                <div className="right-panel lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
                    {/* Charity Details */}
                    <div className="charity-details mb-6">
                        <h2 className="text-lg font-semibold mb-2">Charity Details</h2>
                        {Object.keys(charityDetails).length > 0 ? (
                            <div>
                                <p>
                                    <span className="font-medium">Name:</span> {charityDetails.name}
                                </p>
                                <p>
                                    <span className="font-medium">Description:</span>{" "}
                                    {charityDetails.description}
                                </p>
                                <p>
                                    <span className="font-medium">Contact:</span>{" "}
                                    {charityDetails.contact}
                                </p>
                            </div>
                        ) : (
                            <p>No details set up yet.</p>
                        )}
                    </div>

                    {/* Add Beneficiary Form */}
                    <div className="add-beneficiary mb-6">
                        <h2 className="text-lg font-semibold mb-2">Add Beneficiary</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const name = e.target.elements.beneficiaryName.value;
                                setBeneficiaries([...beneficiaries, name]);
                                e.target.reset();
                            }}
                        >
                            <input
                                type="text"
                                name="beneficiaryName"
                                placeholder="Beneficiary Name"
                                className="block border p-2 mb-2 w-full"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                            >
                                Add Beneficiary
                            </button>
                        </form>
                    </div>

                    {/* Add Story Form */}
                    <div className="add-story">
                        <h2 className="text-lg font-semibold mb-2">Add Beneficiary Story</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const story = e.target.elements.beneficiaryStory.value;
                                setStories([...stories, story]);
                                e.target.reset();
                            }}
                        >
                            <textarea
                                name="beneficiaryStory"
                                placeholder="Share a story"
                                className="block border p-2 mb-2 w-full"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-green-500 text-white px-4 py-2 rounded w-full"
                            >
                                Add Story
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CharityDashboard;
