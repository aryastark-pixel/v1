import React from 'react';
import { Twitter, Linkedin, Github as GitHub, Mail } from 'lucide-react';

const teamMembers = [
  {
    id: '1',
    name: 'Srijana Bhattarai',
    role: 'Founder',
    image: 'me.jpg',
    bio: 'NIT passed out CSE engineer with 3+ years of experience building agile software solutions.',
    social: {
      linkedin: 'https://www.linkedin.com/in/srijana-bhattarai-/',
      email: 'srijanabhattarai291@gmail.com'
    }
  },
  {
    id: '2',
    name: 'Adarsh Bhattarai',
    role: 'Operational Head',
    image: 'dada.png',
    bio: 'With over 10+ years of working in Communication, exceptionally leading our team to achieve excellence.',
    social: {
      email: 'adarshbhattarai100@gmail.com'
    }
  },
  {
    id: '3',
    name: 'Sushil Gupta',
    role: 'UI/UX Developer',
    image: 'sushil.jpg',
    bio: 'Having a strong background in UI/UX design, helping to beautify the vision of our clients.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sushil-kumar-gupta-ab0562322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'sushilg508@gmail.com'
    }
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Our People</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h3>
          <p className="text-xl text-gray-600">
            Our diverse team of experts brings together the perfect blend of technical expertise, creative vision, and business acumen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map(member => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end justify-center">
                  <div className="pb-6 flex gap-4">
                    {member.social.twitter && (
                      <a href={member.social.twitter} target="_blank" rel="noreferrer" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                        <Twitter className="h-5 w-5 text-white" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noreferrer" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                        <Linkedin className="h-5 w-5 text-white" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" rel="noreferrer" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                        <GitHub className="h-5 w-5 text-white" />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                        <Mail className="h-5 w-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 line-clamp-3">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-8 py-3 rounded-full transition-colors duration-300">
            Our Team says Hi!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;