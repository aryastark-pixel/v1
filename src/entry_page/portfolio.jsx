import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from '../pages/Portfolio';
import '../index.css';
import Footer from '../components/layout/Footer.jsx'
import Header from '../components/layout/Header.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Portfolio />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

