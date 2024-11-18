import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-auth-kit';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider
      authType="localstorage"
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https://inuka.onrender.com/"}
    > */}
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
    {/* </AuthProvider> */}
  </React.StrictMode>
);
