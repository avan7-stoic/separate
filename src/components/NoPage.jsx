import React from 'react';
// import { useHistory } from 'react-router-dom'; // Assuming you're using React Router
// import '/src/App.css';

function NoPage() {
    // const history = useHistory();

    // const handleGoBack = () => {
    //     history.goBack();
    // };

    return (
        <div id="errors" className="error-containers">
            <h1 className="error-title">Error: 404</h1>
            <div id="notFound" className="not-found-icon">
                {/* You could add an SVG or image here to represent the error */}
                <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="Not Found" />
            </div>
            <h2 className="not-found-title">Oops! That page couldn’t be found.</h2>
            <h3 className="not-found-desc">
                It looks like nothing was found at this location. Maybe try one of the links below or a search?
            </h3>
            <button type="button" className="go-back-button">
                Go Back
            </button>
        </div>
    );
}

export default NoPage;
