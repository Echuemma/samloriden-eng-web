import React from 'react';
import useAOS from '../../hooks/useAOS';

const HowItWorksSection = () => {
  useAOS({ duration: 1000, once: true });

  const steps = [
    {
      number: '01',
      title: 'CREATIVE IDEATION',
      description: 'We begin by understanding your goals and brainstorming innovative concepts. This phase involves gathering insights, evaluating possibilities, and laying the foundation for a unique and impactful solution.'
    },
    {
      number: '02',
      title: 'DESIGN & PRESENTATION',
      description: 'Our team transforms ideas into structured plans and visual concepts. We craft detailed designs, refine them based on feedback, and present clear solutions that align with your vision and objectives.'
    },
    {
      number: '03',
      title: 'EXECUTION',
      description: 'With the approved designs in hand, we bring the project to life through precise execution. From planning to implementation, we ensure high standards, quality control, and timely delivery.'
    }
  ];

  return (
    <div className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl  text-on-dark md:text-5xl font-bold mb-6 tracking-wide" data-aos="fade-up" >
            HOW IT WORKS
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed text-center" data-aos="fade-down">
            Our process is built on precision, collaboration, and efficiency. We begin by understanding your project needs and constraints, followed by a thorough feasibility analysis and design planning. From concept to construction, our team ensures compliance with regulations, manages resources responsibly, and delivers high-quality results on time and within budget.
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
                <h4 className="text-xl  text-on-dark font-bold mb-4 tracking-wide">
                  {step.title}
                </h4>
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