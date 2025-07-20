import React from 'react';
import ReactDOM from 'react-dom/client';
import HeroSection from '../components/tss/HeroSection';
import BoostCards from '../components/tss/BoostCards';
import '../index.css';
import Footer from '../components/layout/Footer.jsx'
import Header from '../components/layout/Header.jsx'
import { BrowserRouter } from 'react-router-dom';
import FigmaModal from '../components/tss/FigmaModal.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <HeroSection />
      <BoostCards/>
      <FigmaModal/>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

