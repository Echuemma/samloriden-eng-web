import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import useAOS from '../../hooks/useAOS';
import { testimonials } from '../../data/carouselData'; // 👈 import centralized data

export default function TestimonialsSection() {
  useAOS({ duration: 1000, once: true });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 ">
          <div className="relative text-white">
            <div data-aos="fade-left">
              <div className="flex items-center gap-0 mb-4">
                <div className="w-8 h-1 bg-yellow-500 rounded-full"></div>
                <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">
                  Testimonials
                </span>
              </div>

              <h5 className="text-4xl lg:text-5xl text-on-dark font-bold leading-tight mb-0">
                What People are
                <br />
                <span className="text-gray-300">Saying About Us</span>
              </h5>

              <p className="text-lg text-gray-300 leading-relaxed mt-6">
                We value the voices of our community. Here's what people are saying about
                their experiences with us, and why they continue to trust and support our
                work.
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
                    alt={currentData.name}
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
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-8 h-8 rounded-full border border-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 flex items-center justify-center"
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
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-right">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero/house.jpeg"
                alt="Professional construction worker"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
