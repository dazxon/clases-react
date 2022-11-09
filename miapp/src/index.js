import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//ACA IMPORTO MI HEADER - FOOTER
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* //ACA RENDERIZO MI HEADER */}
    <Header />

    <App />

    {/* //ACA RENDERIZO MI FOOTER */}
    <Footer />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

