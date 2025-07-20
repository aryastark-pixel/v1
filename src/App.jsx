import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import TssApp from './pages/TSSApp';


import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials' ;
import Contact from './pages/Contact';


function App() {
  useEffect(() => {
    document.title = 'Shape IT | Innovative IT Solutions';
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tss" element={<TssApp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;