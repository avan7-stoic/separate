import React, { useState } from "react";
import Navbar from "./NavBar";

const AdminDashboard = () => {
    const [view, setView] = useState("overview"); // Default view is 'overview'

    // Dummy data for statistics and donor/charity info
    const stats = {
        totalDonors: 120,
        totalDonations: "$250,000",
        totalApprovedCharities: 45,
        pendingApplications: 12,
    };

    const donors = [
        { name: "John Doe", amount: "$5,000", anonymous: false },
        { name: "Jane Smith", amount: "$1,500", anonymous: true },
        { name: "Emily Clark", amount: "$10,000", anonymous: false },
    ];

    const approvedCharities = [
        { name: "Charity A", location: "New York", approved: true },
        { name: "Charity B", location: "California", approved: true },
    ];

    const pendingCharities = [
        { name: "Charity C", location: "Texas", approved: false },
        { name: "Charity D", location: "Nevada", approved: false },
    ];

    // Dynamic View Rendering
    const renderView = () => {
        switch (view) {
            case "overview":
                return (
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded shadow">
                            <h2 className="text-lg font-semibold">Total Donors</h2>
                            <p className="text-2xl font-bold">{stats.totalDonors}</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h2 className="text-lg font-semibold">Total Donations</h2>
                            <p className="text-2xl font-bold">{stats.totalDonations}</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h2 className="text-lg font-semibold">Approved Charities</h2>
                            <p className="text-2xl font-bold">{stats.totalApprovedCharities}</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h2 className="text-lg font-semibold">Pending Applications</h2>
                            <p className="text-2xl font-bold">{stats.pendingApplications}</p>
                        </div>
                    </div>
                );

            case "donors":
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Donors</h2>
                        <table className="w-full bg-white rounded shadow">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-2 text-left">Name</th>
                                    <th className="p-2 text-left">Amount</th>
                                    <th className="p-2 text-left">Anonymous</th>
                                </tr>
                            </thead>
                            <tbody>
                                {donors.map((donor, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="p-2">{donor.anonymous ? "Anonymous" : donor.name}</td>
                                        <td className="p-2">{donor.amount}</td>
                                        <td className="p-2">{donor.anonymous ? "Yes" : "No"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );

            case "approvedCharities":
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Approved Charities</h2>
                        <ul className="list-disc pl-6">
                            {approvedCharities.map((charity, index) => (
                                <li key={index}>
                                    {charity.name} - {charity.location}
                                </li>
                            ))}
                        </ul>
                    </div>
                );

            case "pendingCharities":
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Pending Charity Applications</h2>
                        <ul className="list-disc pl-6">
                            {pendingCharities.map((charity, index) => (
                                <li key={index}>
                                    {charity.name} - {charity.location}{" "}
                                    <button className="ml-4 bg-green-500 text-white px-2 py-1 rounded">
                                        Approve
                                    </button>{" "}
                                    <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                );

            default:
                return <div>Welcome to the Dashboard</div>;
        }
    };

    return (
        <>
            <Navbar />
            <br />
            <br />
            {/* <NavBar /> */}
            <br />
            <div className="flex h-screen">
                {/* Sidebar */}
                <aside className="bg-gray-800 text-white w-1/4 p-4">
                    <br />
                    <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
                    <nav className="space-y-4">
                        <button
                            onClick={() => setView("overview")}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setView("donors")}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                        >
                            Donors
                        </button>
                        <button
                            onClick={() => setView("approvedCharities")}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                        >
                            Approved Charities
                        </button>
                        <button
                            onClick={() => setView("pendingCharities")}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                        >
                            Pending Applications
                        </button>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="bg-gray-100 w-3/4 p-6">
                    <header className="mb-6">
                        <h1 className="text-3xl font-bold">Administrator Dashboard</h1>
                    </header>
                    <section>{renderView()}</section>
                </main>
            </div>
        </>
    );
};

export default AdminDashboard;
