import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from '../ui/Link';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isTSSPage = location.pathname === '/tss';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? `${isTSSPage ? 'bg-black text-white shadow-md' : 'bg-slate-900 text-white shadow-md'} py-3`
          : `${isTSSPage ? 'bg-black text-white' : 'bg-slate-900/95 text-white'} py-5`
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-2xl font-bold ${
              isTSSPage
                ? 'text-blue-400'
                : 'bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'
            }`}
          >
            Shape<span className={isTSSPage ? 'text-amber-400' : 'text-amber-500'}> IT</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#services"
              className={`font-medium text-sm transition-colors ${
                isTSSPage ? 'text-gray-300 hover:text-white' : 'text-gray-100 hover:text-white'
              }`}
            >
              Services
            </Link>
            {['Portfolio', 'About', 'Team', 'Testimonials', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`font-medium text-sm transition-colors ${
                  isTSSPage ? 'text-gray-300 hover:text-white' : 'text-gray-100 hover:text-white'
                }`}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/tss"
              className="bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Our Product
            </Link>
          </nav>

          <button
            className={`${isTSSPage ? 'text-white' : 'text-white'} md:hidden focus:outline-none`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 ${
          isTSSPage ? 'bg-black text-white' : 'bg-slate-900 text-white'
        } transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <Link
              href="/"
              className={`text-2xl font-bold ${
                isTSSPage
                  ? 'text-blue-400'
                  : 'bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'
              }`}
            >
              Shape<span className={isTSSPage ? 'text-amber-400' : 'text-amber-500'}> IT</span>
            </Link>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {['Services', 'Portfolio', 'About', 'Team', 'Testimonials', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Services' ? '/#services' : `/${item.toLowerCase()}`}
                className={`${
                  isTSSPage ? 'text-white hover:text-blue-400' : 'text-white hover:text-blue-400'
                } text-xl font-medium transition-colors duration-300`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;