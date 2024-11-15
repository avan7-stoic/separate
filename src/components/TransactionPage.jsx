import React, { useState } from 'react';
import '/src/App.css';

/**
 * DonateForHer is a React functional component that allows users to select donation options
 * for transforming a girl's life. Users can choose a donation frequency (One-time, Monthly,
 * or Annually) and select a predefined amount ($10, $25, $50, $100, $250, $500) or enter a 
 * custom amount. The component also provides options to pay via Credit Card or Paypal.
 * 
 * @component
 * @example
 * return (
 *   <DonateForHer />
 * )
 */

const DonateForHer = () => {
    const [frequency, setFrequency] = useState('One-time');
    const [amount, setAmount] = useState(null);

    const handleFrequencyClick = (value) => {
        setFrequency(value);
    };

    const handleAmountClick = (value) => {
        setAmount(value);
    };

    return (
        <div className="container">
            <div className="left-panel">
                <img src="https://via.placeholder.com/300x200" alt="Girl" />
                <h3>Transform a girl's life for as little as $10 a month</h3>
                <p>lorem ipsum ......................</p>
                <div className="payment-method">
                    <button className="credit-card">Credit Card</button>
                    <button className="paypal">Paypal</button>
                </div>
                <p className="note">Other ways you can give</p>
                <p className="note">* All donations are non-refundable</p>
            </div>

            <div className="donation-options">
                <div className="donation-frequencies">
                    <div
                        className={`frequency ${frequency === 'One-time' ? 'selected' : ''}`}
                        onClick={() => handleFrequencyClick('One-time')}
                    >
                        One-time
                    </div>
                    <div
                        className={`frequency ${frequency === 'Monthly' ? 'selected' : ''}`}
                        onClick={() => handleFrequencyClick('Monthly')}
                    >
                        Monthly
                    </div>
                    <div
                        className={`frequency ${frequency === 'Annually' ? 'selected' : ''}`}
                        onClick={() => handleFrequencyClick('Annually')}
                    >
                        Annually
                    </div>
                </div>

                <div className="amount-options">
                    {[10, 25, 50, 100, 250, 500].map((value) => (
                        <div
                            key={value}
                            className={`amount-option ${amount === value ? 'selected' : ''}`}
                            onClick={() => handleAmountClick(value)}
                        >
                            ${value}
                        </div>
                    ))}
                </div>

                <div
                    className={`custom-amount ${amount === 'custom' ? 'selected' : ''}`}
                    onClick={() => handleAmountClick('custom')}
                >
                    Custom Amount
                </div>

                <button className="next-button">Next →</button>
            </div>
        </div>
    );
};

export default DonateForHer;
