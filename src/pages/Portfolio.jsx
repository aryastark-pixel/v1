import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  // {
  //   id: '1',
  //   title: 'Hospital Management System',
  //   category: 'Hospital Management System',
  //   image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   description: 'A secure database management system transiting data across many users',
  //   url: '/hms',
  // },
  {
    id: '2',
    title: 'Upride',
    category: 'UI Redesign',
    image: 'upride.png',
    description: 'Redesigned the user interface for a modern and intuitive experience',
    url: '/upride',
  },
  {
    id: '3',
    title: 'Acer',
    category: 'UI Redesign',
    image: 'acer.png',
    description: 'UI redesign for Acer’s product page to enhance user engagement',
    url: '/acer',
  },
  // {
  //   id: '4',
  //   title: 'Maya Tours and Travels',
  //   category: 'Tours and Travels',
  //   image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   description: 'Tour and travel management platform with booking and itinerary features',
  //   url: '/project4',
  // },
  // {
  //   id: '5',
  //   title: 'Organic Sikkim',
  //   category: 'E-Commerce',
  //   image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   description: 'E-Commerce platform for organic products with user-friendly interface',
  //   url: '/project5',
  // },
  // {
  //   id: '6',
  //   title: 'Detan Finance',
  //   category: 'Business Platform',
  //   image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   description: 'A comprehensive dashboard for financial SIP and Mutual Funds data visualization',
  //   url: '/project6',
  // },
  // {
  //   id: '7',
  //   title: 'Ririana Innovations',
  //   category: 'Business Platform',
  //   image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   description: 'A comprehensive dashboard for financial SIP and Mutual Funds data visualization',
  //   url: '/project7',
  // },
  // {
  //   id: '8',
  //   title: 'Connect4Collab',
  //   category: 'Business Platform',
  //   image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   description: 'Digital business platform',
  //   caseStudyUrl: 'https://connect4collab.in',
  // },
];

const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h3>
          <p className="text-xl text-gray-600">
            Explore our portfolio of successful projects delivered across various industries and technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <a
              key={project.id}
              href={project.url}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl block"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <div className="bg-blue-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-3">
                  {project.category}
                </div>
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>

                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
