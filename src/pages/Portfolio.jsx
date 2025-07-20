import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: '1',
    title: 'Detan Finance',
    category: 'Web Application',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A comprehensive dashboard for financial SIP and Mutual Funds data visualization',
    tags: ['React.tsx', 'Tailwindcss', 'Python'],
    caseStudyUrl: 'https://www.detan.in'
  },
  {
    id: '2',
    title: 'Business Platform',
    category: 'Web Application',
    image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Digital business platform',
    tags: ['React.tsx', 'Tailwind'],
    caseStudyUrl: 'https://connect4collab.in',
  },
  {
    id: '3',
    title: 'Database Management System',
    category: 'Database Management System',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A secure database management system transiting data across many users',
    tags: ['Django', 'React.jsx', 'PostgreSQL'],
    caseStudyUrl: '',
  },
  {
    id: '4',
    title: 'Enterprise Solution',
    category: 'Enterprise Solution',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '',
    tags: ['React.jsx', 'Tailwindcss'],
    caseStudyUrl: 'https://ririana.in',
  },
];

const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

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
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer"
              onClick={() => setActiveProject(project)}
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
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setActiveProject(null)}>
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-80">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-colors"
                onClick={() => setActiveProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{activeProject.title}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {activeProject.category}
                </span>
              </div>

              <p className="text-gray-700 mb-6">{activeProject.description}</p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                {activeProject.caseStudyUrl && (
                  <a
                    href={activeProject.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    View Project
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;