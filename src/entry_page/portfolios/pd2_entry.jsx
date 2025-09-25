// Acer
import React from 'react';
import ReactDOM from 'react-dom/client';
import AcerRedesign from '../../pages/PortfolioDetails/PD2';
import '../index.css';
import Footer from '../components/layout/Footer.jsx'
import Header from '../components/layout/Header.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="min-h-screen flex flex-col">
      <Header />
      <AcerRedesign />
      <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

