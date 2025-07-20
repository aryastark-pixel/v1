import React from 'react';
import { Code, Globe, Smartphone, Database, Cpu, Sliders } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-10 w-10 text-blue-500" />,
    title: 'Custom Software Development',
    description: 'Tailor-made solutions designed to address your specific business needs and challenges.'
  },
  {
    icon: <Globe className="h-10 w-10 text-indigo-500" />,
    title: 'Web Application Development',
    description: 'Powerful, scalable web applications built with modern technologies and frameworks.'
  },
  {
    icon: <Smartphone className="h-10 w-10 text-purple-500" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.'
  },
  {
    icon: <Sliders className="h-10 w-10 text-teal-500" />,
    title: 'UI/UX',
    description: 'Crafting user-centered designs with a focus on seamless experience, ensuring both beauty and functionality for your digital products.'
  },
  {
    icon: <Database className="h-10 w-10 text-red-500" />,
    title: 'Database Management System',
    description: 'Create a local Database Management System for your business needs.'
  },
  {
    icon: <Cpu className="h-10 w-10 text-blue-600" />,
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions that automate processes and uncover valuable patterns in your data.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive IT Services</h3>
          <p className="text-xl text-gray-600">
            We deliver end-to-end technology solutions that drive innovation and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="mb-5 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                  {service.icon}
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;