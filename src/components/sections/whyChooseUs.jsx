import React from 'react';
import { Users, Star, Home } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: 'EXPERTISE & COLLABORATION',
      description: 'Our team of seasoned designers, contractors, and renovation specialists brings a wealth of knowledge and expertise to every project.'
    },
    {
      icon: <Star className="w-6 h-6 text-white" />,
      title: 'SEAMLESS EXPERIENCE & QUALITY',
      description: 'We use only the finest materials and employ meticulous craftsmanship to ensure your project is completed to the highest standards, exceeding expectations.'
    },
    {
      icon: <Home className="w-6 h-6 text-white" />,
      title: 'FUNCTION YOU LIVE IN',
      description: 'A beautiful space should also be functional. We\'ll optimize your layout and incorporate smart solutions to ensure your home works as well as it looks.'
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-wide">
            WHY CHOOSE US?
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                  {benefit.icon}
                </div>
                
                <div className="flex-1">
                  <h6 className="text-xl font-bold text-gray-900 mb-2 tracking-wide">
                    {benefit.title}
                  </h6>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional consultation"
                className="w-full h-96 object-cover"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-200 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;