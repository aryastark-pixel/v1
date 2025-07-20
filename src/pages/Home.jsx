import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';


const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <section id ="services">
        <Services />
      </section>
      
      
    </main>
  );
};

export default Home;