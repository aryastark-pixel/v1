import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Footer from '../components/layout/Footer.jsx'
import Header from '../components/layout/Header.jsx'

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <section id ="services">
        <Header />
        <Services />
        <Footer />
      </section>     
    </main>
  );
};

export default Home;