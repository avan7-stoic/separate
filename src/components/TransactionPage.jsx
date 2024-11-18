import React, { useState } from 'react';

const DonateForHer = () => {
    const [frequency, setFrequency] = useState('One-time');
    const [amount, setAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState('');
    const [showCustomInput, setShowCustomInput] = useState(false);
    const [showCardOptions, setShowCardOptions] = useState(false);

    // Handle frequency button click
    const handleFrequencyClick = (value) => {
        setFrequency(value);
    };

    // Handle amount button click
    const handleAmountClick = (value) => {
        setAmount(value);
        setShowCustomInput(false); // Hide custom input if a predefined amount is selected
    };

    // Handle custom amount input change (only integers allowed)
    const handleCustomAmountChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setCustomAmount(value); // Set custom amount if input is a valid integer
        }
    };

    // Handle card button click (show available card options)
    const handleCardClick = () => {
        setShowCardOptions(!showCardOptions);
    };

    // Handle paypal button click (redirect to paypal)
    const handlePaypalClick = () => {
        window.location.href = "https://www.paypal.com"; // Redirect to PayPal
    };

    return (
        <div className="flex justify-between p-8 bg-gray-100">
            {/* Left Panel */}
            <div className="w-2/5 p-6 bg-white rounded-lg shadow-md text-center">
                <img src="src/assets/payment-gateways.jpg" alt="Girl" className="w-full rounded-lg mb-6  bg-red" />
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Transform a girl's life for as little as $10 a month
                </h3>
                <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <div className="flex justify-center gap-4 mb-6">
                    <button onClick={handleCardClick} className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Credit Card</button>
                    <button onClick={handlePaypalClick} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Paypal</button>
                </div>
                {showCardOptions && (
                    <div className="flex justify-center gap-4 mb-6">
                        <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">Visa</div>
                        <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">MasterCard</div>
                        <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">Amex</div>
                    </div>
                )}
                <p className="text-gray-500 text-sm">Other ways you can give</p>
                <p className="text-gray-500 text-sm mt-2">* All donations are non-refundable</p>
            </div>

            {/* Right Panel */}
            <div className="w-3/5 p-6 bg-white rounded-lg shadow-md">
                {/* Frequency options */}
                <div className="flex justify-around mb-6">
                    {['One-time', 'Monthly', 'Annually'].map((freq) => (
                        <div
                            key={freq}
                            className={`px-6 py-2 text-lg cursor-pointer rounded-lg transition-all duration-200 ${frequency === freq ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-green-500 hover:text-white'}`}
                            onClick={() => handleFrequencyClick(freq)}
                        >
                            {freq}
                        </div>
                    ))}
                </div>

                {/* Amount options */}
                <div className="flex justify-around mb-6">
                    {[10, 25, 50, 100, 250, 500].map((value) => (
                        <div
                            key={value}
                            className={`px-6 py-2 text-xl cursor-pointer rounded-lg transition-all duration-200 ${amount === value ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-green-500 hover:text-white'}`}
                            onClick={() => handleAmountClick(value)}
                        >
                            ${value}
                        </div>
                    ))}
                </div>

                {/* Custom amount option */}
                <div
                    className={`px-6 py-2 text-xl cursor-pointer rounded-lg text-center transition-all duration-200 ${amount === 'custom' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-green-500 hover:text-white'}`}
                    onClick={() => {
                        setShowCustomInput(!showCustomInput);
                        setAmount('custom');
                    }}
                >
                    Custom Amount
                </div>

                {/* Custom Amount Input Field */}
                {showCustomInput && (
                    <div className="mt-4">
                        <input
                            type="text"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-xl text-center focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter custom amount"
                        />
                    </div>
                )}

                {/* Next Button */}
                <button className="w-full py-3 bg-blue-600 text-white rounded-lg mt-6 hover:bg-blue-700">
                    Next →
                </button>
            </div>
        </div>
    );
};

export default DonateForHer;
