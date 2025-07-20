import React from 'react';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from '../ui/Link';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isTSSPage = location.pathname === '/tss';

  const handleServiceClick = () => {
    navigate('/#services');
    setTimeout(() => {
      const section = document.getElementById('services');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className={`${isTSSPage ? 'bg-black text-white' : 'bg-slate-900 text-white'} pt-20 pb-8`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link
              href="/"
              className={`text-2xl font-bold inline-block mb-6 hover:scale-105 transition-transform ${
                isTSSPage
                  ? 'text-blue-400'
                  : 'bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent'
              }`}
            >
              Shape<span className={isTSSPage ? 'text-amber-400' : 'text-amber-500'}> IT</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative technology solutions since 2024.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/company/shape-it-in/' },
                { icon: <Mail className="h-5 w-5" />, href: 'mailto:shapeit.india@gmail.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    isTSSPage
                      ? 'bg-gray-800 text-blue-400 hover:bg-blue-600 hover:text-white'
                      : 'bg-slate-800 hover:bg-blue-600'
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <button
              onClick={handleServiceClick}
              className="text-lg font-semibold mb-6 text-white hover:text-blue-400 transition-colors duration-300"
            >
              Services
            </button>
            <ul className="space-y-4">
              {[
                'Custom Software Development',
                'Web Application Development',
                'Mobile App Development',
                'Database Management System',
                'AI & Machine Learning',
                'UI/UX'
              ].map((service, index) => (
                <li key={index} className="text-gray-400 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Team', href: '/team' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Shape IT. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-sm text-gray-500 hover:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;