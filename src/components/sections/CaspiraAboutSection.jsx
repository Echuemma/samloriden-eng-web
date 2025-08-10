import React from 'react';

const Button = ({ children, className = "", ...props }) => (
  <button className={`px-6 py-3 rounded-lg font-semibold transition-colors ${className}`} {...props}>
    {children}
  </button>
);

const CaspiraAboutSection = () => {
  return (
    <div className="bg-gray-50 py-16 lg:py-14">
      <div className="w-[100%] md:w-[80%] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about/construction-building.jpg" 
                alt="Engineers reviewing blueprints" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-8 relative">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-yellow-500 rounded-full"></div>
                <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wide">
                  About SAMLORIDEN
                </span>
              </div>
              
              <h4 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2">
                Crafting Tomorrow's
                <br />
                <h4 className="text-gray-800">Landmarks Today</h4>
              </h4>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                At SAMLORIDEN, we are dedicated to building excellence with precision, 
                innovation, and integrity. With years of industry expertise, we deliver high-quality 
                construction solutions that stand the test of time. Whether it's residential, 
                commercial, or industrial projects, our skilled team ensures every detail is 
                executed flawlessly.
              </p>
            </div>

            <div className=" text-white p-6 rounded-2xl shadow-xl my-4 relative md:absolute md:-left-24 xl:-left-32 md:w-[calc(100%+6rem)] xl:w-[calc(100%+8rem)] md:top-65 md:mt-10 z-20" style={{ background: 'var(--color-primary-alt)' }}>
              <h6 className="text-lg lg:text-xl font-bold mb-3 text-white">
                Building Timeless Structures with Innovation & Excellence.
              </h6>
              <p className="text-sm lg:text-base text-yellow-100">
                SAMLORIDEN creates timeless, high-quality structures that combine innovative design, 
                sustainable practices, and unmatched craftsmanship, shaping spaces built to last.
              </p>
            </div>
         

            <div className="px-0 py-6 rounded-2xl md:mt-50">
              <p className="text-gray-700 leading-relaxed">
                Whether it's residential, commercial, or industrial projects, our skilled team 
                ensures every detail is executed flawlessly. We prioritize safety, efficiency, 
                and sustainability, transforming visions into reality with.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CaspiraAboutSection;