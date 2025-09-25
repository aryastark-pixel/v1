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
import PortfolioDetails from './pages/PortfolioDetails/PD1';
import PD2 from './pages/PortfolioDetails/PD2'; //change this
import Headerr from './pages/PortfolioDetails/PD3';
function App() {
  useEffect(() => {
    document.title = 'Shape IT | Innovative IT Solutions';
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<div>  <Header /> <Portfolio />  <Footer /> </div> } />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tss" element={<TssApp />} />
          <Route path="/upride" element={<PortfolioDetails />} />
          <Route path="/acer" element={<PD2 />} />
      
          {/* <Route path="/hms" element={<Headerr />} />  */}

        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;