import React from 'react';
import useAOS from '../../hooks/useAOS'; 

const CaspiraAboutSection = () => {
useAOS({ duration: 1000, once: true }); 
  
  return (
    <div className="bg-gray-50 py-16 lg:py-14">
      <div className="w-[100%] md:w-[80%] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl" data-aos="fade-right">
              <img 
                src="/images/about/construction-building.jpg" 
                alt="Civil engineers and architects reviewing structural blueprints Nigeria" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-8 relative">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-yellow-500 rounded-full"></div>
                <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wide">
                  About SAMLORIDEN Engineering
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2">
                Engineering Excellence
                <br />
                <h3 className="text-gray-800">Building Nigeria's Future</h3>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                SAMLORIDEN ENGINEERING AND CONSULTANCY LTD combines advanced civil engineering 
                expertise with comprehensive real estate solutions across Nigeria. With 25+ years 
                of experience, our team of qualified engineers and property specialists delivers 
                structurally superior projects that maximize both safety and investment value.
              </p>
            </div>

            <div className=" text-white p-6 rounded-2xl shadow-xl my-4 relative md:absolute md:-left-24 xl:-left-32 md:w-[calc(100%+6rem)] xl:w-[calc(100%+8rem)] md:top-65 md:mt-10 z-20" data-aos="fade-up" style={{ background: 'var(--color-primary-alt)' }}>
              <h4 className="text-lg lg:text-xl font-bold mb-3 text-white">
                Where Civil Engineering Meets Real Estate Investment Success
              </h4>
              <p className="text-sm lg:text-base text-yellow-100">
                Our integrated approach leverages structural engineering, geotechnical analysis, 
                and construction management expertise to create properties that deliver superior 
                performance, durability, and return on investment across Nigerian markets.
              </p>
            </div>
         

            <div className="px-0 py-6 rounded-2xl md:mt-50">
              <p className="text-gray-700 leading-relaxed">
                From infrastructure development and structural design to property management and 
                real estate consulting, our multidisciplinary team ensures every project benefits 
                from rigorous engineering standards, sustainable construction practices, and strategic 
                market positioning throughout Nigeria's growing urban centers.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CaspiraAboutSection;