import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import useAOS from '../../hooks/useAOS';

export default function SamloridensTestimonialsSection() {
  useAOS({ duration: 1000, once: true });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // SEO-optimized testimonials aligned with SAMLORIDEN's engineering and real estate services
  const testimonials = [
    {
      id: 1,
      text: "SAMLORIDEN's integrated approach to civil engineering and real estate development exceeded our expectations. Their geotechnical investigation was thorough, and the structural design perfectly matched our commercial development needs in Lagos. The property management services have maintained excellent tenant satisfaction.",
      name: "Adebayo Okonkwo",
      role: "Property Developer, Lagos State",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      text: "Working with SAMLORIDEN Engineering on our residential project in Abuja was exceptional. Their BIM modeling and sustainable design solutions reduced construction costs by 20% while ensuring full Nigerian Building Code compliance. The engineering team's expertise is unmatched.",
      name: "Dr. Fatima Ibrahim",
      role: "Real Estate Investor, FCT Abuja",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c6a96db1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      text: "SAMLORIDEN's road infrastructure engineering project transformed our commercial district. Their drainage systems prevented flooding during the rainy season, and property values increased by 25%. Their technical expertise and project management were outstanding throughout.",
      name: "Engr. Chinedu Okorie",
      role: "Municipal Infrastructure Coordinator",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      text: "The property management services from SAMLORIDEN have been excellent. Their engineering background ensures technical issues are resolved quickly, and their market knowledge helps optimize rental yields. Our portfolio performance has improved significantly since partnering with them.",
      name: "Mrs. Grace Adeola",
      role: "Commercial Property Owner, Port Harcourt",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      text: "SAMLORIDEN's construction management and quality control processes are exceptional. Their engineering-led approach ensured our mixed-use development was completed on schedule and within budget. The structural integrity and sustainable features have attracted premium tenants.",
      name: "Ibrahim Musa",
      role: "Construction Project Manager, Kano",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <div className="bg-slate-900">
      <div className="w-full md:w-[90%] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
          <div className="relative text-white">
            <div data-aos="fade-left">
              <div className="flex items-center gap-0 mb-4">
                <div className="w-8 h-1 bg-yellow-500 rounded-full"></div>
                <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">
                  Client Testimonials
                </span>
              </div>

              <h5 className="text-4xl lg:text-5xl text-on-dark font-bold leading-tight mb-0">
                What Our Engineering &
                <br />
                <span className="text-gray-300">Real Estate Clients Say</span>
              </h5>

              <p className="text-lg text-gray-300 leading-relaxed mt-6">
                Discover how SAMLORIDEN's integrated civil engineering and real estate solutions 
                have delivered exceptional results for property developers, investors, and 
                infrastructure projects across Nigeria. Real experiences from satisfied clients.
              </p>
            </div>

            <div
              className="bg-white text-gray-900 p-6 rounded-2xl shadow-xl my-8 relative md:absolute md:-right-24 xl:-right-32 md:w-[calc(100%+6rem)] xl:w-[calc(100%+8rem)] md:top-45 md:mt-10 z-20"
              data-aos="fade-up"
            >
              <div className="absolute top-0 right-6 text-yellow-400 text-3xl opacity-30">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              <div className="flex space-x-1 mb-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="min-h-[100px] flex items-start mb-0">
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                  {currentData.text}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 mt-4">
                  <img
                    src={currentData.avatar}
                    alt={`${currentData.name} SAMLORIDEN Engineering client testimonial`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h6 className="font-semibold text-gray-900 text-sm">{currentData.name}</h6>
                    <p className="text-gray-500 text-xs">{currentData.role}</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-8 h-8 rounded-full border border-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 flex items-center justify-center"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-8 h-8 rounded-full border border-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 flex items-center justify-center"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex justify-center space-x-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-yellow-400 w-1'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Additional trust indicators */}
            <div className="mt-8 md:mt-16 grid grid-cols-3 gap-4 mb-4" data-aos="fade-up">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">150+</div>
                <div className="text-xs text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">98%</div>
                <div className="text-xs text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">25+</div>
                <div className="text-xs text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-right">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero/house.jpeg"
                alt="SAMLORIDEN Engineering construction project Nigeria civil engineering real estate"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating credential badge */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg" data-aos="zoom-in">
              <div className="text-center">
                <div className="text-sm font-bold text-gray-900">Licensed Engineers</div>
                <div className="text-xs text-gray-600">Nigerian Building Code</div>
                <div className="text-xs text-gray-600">Certified Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}