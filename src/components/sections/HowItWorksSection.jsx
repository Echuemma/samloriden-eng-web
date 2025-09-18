import React from 'react';
import useAOS from '../../hooks/useAOS';

const HowItWorksSection = () => {
  useAOS({ duration: 1000, once: true });

  const steps = [
    {
      number: '01',
      title: 'ENGINEERING ASSESSMENT',
      description: 'We begin with comprehensive site investigation, geotechnical analysis, and structural feasibility studies. Our engineers conduct soil testing, topographical surveys, and regulatory compliance reviews to establish solid technical foundations for your project in Nigerian conditions.'
    },
    {
      number: '02',
      title: 'DESIGN & ENGINEERING',
      description: 'Our multidisciplinary team creates detailed structural designs, architectural plans, and construction specifications using BIM technology. We integrate sustainable engineering solutions, optimize material selection, and ensure compliance with Nigerian building codes and international standards.'
    },
    {
      number: '03',
      title: 'CONSTRUCTION & DELIVERY',
      description: 'Through expert project management, we coordinate construction activities, quality control, and safety protocols. Our engineers supervise every phase from foundation to completion, ensuring structural integrity, timeline adherence, and successful property handover with ongoing technical support.'
    }
  ];

  return (
    <div className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl  text-on-dark md:text-5xl font-bold mb-6 tracking-wide" data-aos="fade-up" >
            OUR ENGINEERING PROCESS
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed text-center" data-aos="fade-down">
            Our integrated engineering and real estate process combines rigorous technical analysis with market-driven solutions. We begin with comprehensive site assessment and engineering feasibility studies, followed by detailed structural design and sustainable construction planning. From geotechnical investigation to final property delivery, our qualified engineers ensure every project meets the highest standards of safety, quality, and performance in Nigeria's demanding construction environment.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-6 inset-x-16 h-px">
            <div className="flex items-center h-full">
              <div className="flex-1 border-t border-dotted border-gray-500"></div>
              <div className="w-3 h-3 bg-white rounded-full mx-8"></div>
              <div className="flex-1 border-t border-dotted border-gray-500"></div>
            </div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative" data-aos="fade-up">
              <div className="flex justify-center mb-8 relative z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">{step.number}</span>
                </div>
              </div>

              <div className="text-center">
                <h5 className="text-xl  text-on-dark font-bold mb-4 tracking-wide">
                  {step.title}
                </h5>
                <p className="text-gray-300 leading-relaxed text-sm text-justify">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;