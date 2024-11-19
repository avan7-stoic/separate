import React from 'react';

function NoPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-purple-50 p-6">
            <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-pink-600 mb-4">Error: 404</h1>
                    <h2 className="text-2xl font-semibold text-purple-800 mb-2">Oops! That page couldn’t be found.</h2>
                    <h3 className="text-lg text-purple-600 mb-4">
                        It looks like nothing was found at this location.
                    </h3>
                    <button
                        type="button"
                        className="py-2 px-4 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition duration-200"
                        onClick={() => window.history.back()}
                    >
                        Go Back
                    </button>
                </div>
                <div className="flex justify-center">
                    <img
                        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                        alt="Not Found"
                        className="w-180 h-120 md:w-196 md:h-96"
                    />
                </div>
            </div>
        </div>
    );
}

export default NoPage;
