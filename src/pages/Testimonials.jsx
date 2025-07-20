import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    name: 'Connect4Collab',
    position: 'CEO & Co-Founder',
    company: 'Ravangla, India',
    image: 'rev1.jpg',
    quote:
      'Shape IT perfectly captured our vision and turned it into a stunning, user-friendly website. Super impressed with their creativity and professionalism!',
    rating: 5
  },
  {
    id: '2',
    name: 'Detan',
    position: 'Director of Operations',
    company: 'Madhya Pradesh, India',
    image: 'det.png',
    quote: 'Impressive UI and timely delivery!',
    rating: 5
  },
  {
    id: '3',
    name: 'Pramod Pradhan',
    position: 'Sikkim',
    company: 'India',
    image: 'dbms.png',
    quote:
      'The team perfectly captured our requirements for a local DBMS. Impressed with the efficiency of the team!',
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h3>
          <p className="text-xl text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with Shape IT.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-br-full z-0"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-100 rounded-tl-full z-0"></div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex justify-center mt-4">
                      {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <svg
                    className="h-12 w-12 text-gray-200 mb-6"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>

                  <p className="text-xl md:text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                    {testimonials[activeIndex].quote}
                  </p>

                  <div>
                    <p className="text-lg font-bold text-gray-900">{testimonials[activeIndex].name}</p>
                    <p className="text-gray-600">
                      {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;