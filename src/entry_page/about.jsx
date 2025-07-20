import React from 'react';
import ReactDOM from 'react-dom/client';
import About from '../pages/About';
import '../index.css';
import Footer from '../components/layout/Footer.jsx'
import Header from '../components/layout/Header.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <About />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

