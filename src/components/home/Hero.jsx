import React from 'react';
import { ArrowRight, Code, PenTool, BarChart4 } from 'lucide-react';
import { Link } from '../ui/Link';

const Hero = () => {
  
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
            Transforming ideas into digital reality
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Elevate Your Business Ideas With <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Cutting Edge</span> Technology
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl">
            We design innovative digital solutions for businesses of all sizes, from micro and small enterprises to large corporations, empowering them to bring their ideas to life in today’s competitive landscape. Our team of experts combines technical excellence with a creative outlook, helping you to shape your vision through IT.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/portfolio" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 rounded-full font-semibold text-lg transition-colors duration-300"
            >
              View Our Work
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { 
                icon: <Code className="h-10 w-10 text-blue-400" />, 
                title: "Custom Development", 
                description: "Tailored software solutions built to solve your unique business challenges."
              },
              { 
                icon: <PenTool className="h-10 w-10 text-purple-400" />, 
                title: "UX/UI Design", 
                description: "Intuitive, beautiful interfaces that engage users and drive conversions."
              },
              { 
                icon: <BarChart4 className="h-10 w-10 text-amber-400" />, 
                title: "Digital Strategy", 
                description: "Data-driven approaches that position your business for sustainable growth."
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 transition duration-300 blur"></div>
                <div className="relative">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;