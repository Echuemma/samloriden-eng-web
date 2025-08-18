import React from 'react';
import { Wrench, ShoppingCart, Layers } from 'lucide-react';
import useAOS from '../../hooks/useAOS'; 

function WhyChooseUsSection() {
      useAOS({ duration: 1000, once: true }); 
  
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5"
             style={{ background: 'var(--color-primary-alt)' }}
            ></div>
            <span className=" font-medium"
             style={{ color: 'var(--color-primary-alt)' }}
            >Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why We're Your Best Choice
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit tellus,
            luctus nec ultrices cuique mattis pulvinar dapibus leo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" >
          <div className="bg-white border-1 l p-6 shadow-lg hover:shadow-xl transition-shadow duration-400 flex flex-col justify-between"
            style={{ borderColor: 'var(--color-primary-alt)', borderRadius: '0.5rem' }}
           data-aos="fade-left"
          >
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-gray-700" />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Craftsmanship
              </h5>
              <p className="text-gray-600 leading-relaxed mb-4">
                We bring precision and quality to every project. Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-3xl font-bold text-gray-900">800+</div>
              <div className="text-sm text-gray-500 font-medium">Complete Project</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg" data-aos="fade-up">
            <div className="h-80 bg-gradient-to-br from-blue-400 to-blue-600 relative" >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=600&fit=crop"
                alt="Modern apartment buildings"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-white border-1 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            style={{ borderColor: 'var(--color-primary-alt)', borderRadius: '0.5rem' }}
            data-aos="fade-right"
          >
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-3">
                Reliable & On-Time
              </h5>
              <p className="text-gray-600 leading-relaxed mb-4">
                We meet deadlines without compromising on excellence. Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-3xl font-bold text-gray-900">950+</div>
              <div className="text-sm text-gray-500 font-medium">Incoming Project</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg" data-aos="fade-left"> 
            <div className="h-80">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop"
                alt="Residential complex"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-white border-1 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
           style={{ borderColor: 'var(--color-primary-alt)', borderRadius: '0.5rem' }}
            data-aos="fade-up"
          >            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-gray-700" />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-3">
                Innovative Solutions
              </h5>
              <p className="text-gray-600 leading-relaxed mb-4">
                Modern designs and smart construction techniques. Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-3xl font-bold text-gray-900">600+</div>
              <div className="text-sm text-gray-500 font-medium">Expert Team</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right">
            <div className="h-80">
              <img
                src="https://images.unsplash.com/photo-1567496898669-ee935f5317be?w=500&h=400&fit=crop"
                alt="High-rise buildings"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;