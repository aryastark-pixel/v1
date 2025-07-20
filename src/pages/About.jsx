

import React from 'react';
import { CheckCircle, TrendingUp, Users, Shield } from 'lucide-react';

const About = () => {
  
  return (
    <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600 rounded-xl opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600 rounded-xl opacity-20"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Our Story</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Striving For Digital Excellence Since 2024
                </h3>
                
                <p className="text-gray-300 mb-6">
                  Shape IT was founded with a clear vision: to help businesses leverage technology to achieve their strategic goals, to help shape ideas, innovations and visions with IT. What began as a small team of passionate developers has now registered under Udyam MSME and is ever growing to provide better, secure, and faster devlopment services accross all industries.
                </p>
                
                <p className="text-gray-300 mb-8">
                  Our approach combines technical expertise with business acumen, allowing us to deliver solutions that not only solve immediate challenges but position our clients for long-term success in an increasingly digital world.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: <CheckCircle className="h-5 w-5 text-blue-400" />, text: "10+ Successful Projects" },
                    { icon: <TrendingUp className="h-5 w-5 text-blue-400" />, text: "95% Client Retention" },
                    { icon: <Users className="h-5 w-5 text-blue-400" />, text: "Team of 4+ Experts" },
                    { icon: <Shield className="h-5 w-5 text-blue-400" />, text: "MSME Registered" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-3">{item.icon}</div>
                      <span className="text-gray-200">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl transform rotate-3 opacity-30 blur-lg"></div>
              
              <img 
                src="shapeit3.png" 
                alt="Our team collaborating" 
                className="relative z-10 rounded-2xl w-full shadow-xl"
              />
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">Our Core Values</h4>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Excellence",
                    description: "We strive for excellence in every line of code, every design decision, and every client interaction."
                  },
                  {
                    title: "Innovation",
                    description: "We embrace emerging technologies and methodologies to deliver cutting-edge solutions."
                  },
                  {
                    title: "Collaboration",
                    description: "We work closely with our clients, treating their challenges as our own and their success as our measure."
                  }
                ].map((value, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded"></div>
                    <h5 className="text-lg font-medium text-white mb-1">{value.title}</h5>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;