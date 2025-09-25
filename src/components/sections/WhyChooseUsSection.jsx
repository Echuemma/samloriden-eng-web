import React from 'react';
import { Wrench, ShoppingCart, Layers } from 'lucide-react';
import useAOS from '../../hooks/useAOS'; 

function SamloridensWhyChooseUsSection() {
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
            >Engineering Excellence Nigeria</span>
          </div>
          <h5 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose SAMLORIDEN Engineering & Real Estate Consultancy
          </h5>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Selecting the right engineering and real estate partner is critical for project success in Nigeria.
            SAMLORIDEN ENGINEERING AND CONSULTANCY LTD combines world-class civil engineering expertise with 
            comprehensive real estate solutions, delivering innovative structural design, sustainable construction 
            practices, and property development strategies across Abuja, Lagos, Port Harcourt, and nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" >
          <div className="bg-white border-1 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-400 flex flex-col justify-between h-96"
            style={{ borderColor: 'var(--color-primary-alt)' }}
           data-aos="fade-left"
          >
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-gray-700" />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-3">
                Licensed Civil Engineering Excellence
              </h5>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our professional engineers deliver precision in structural design, BIM modeling, geotechnical investigations, 
                and Nigerian Building Code compliance for residential, commercial, and infrastructure projects.
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-3xl font-bold text-gray-900">150+</div>
              <div className="text-sm text-gray-500 font-medium">Engineering Projects Completed</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-96" data-aos="fade-up">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=600&fit=crop"
              alt="SAMLORIDEN Engineering structural design projects Nigeria civil engineering"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white border-1 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-96"
            style={{ borderColor: 'var(--color-primary-alt)' }}
            data-aos="fade-right"
          >
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-3">
                Integrated Engineering & Real Estate Solutions
              </h5>
              <p className="text-gray-600 leading-relaxed mb-4">
                Complete project delivery from site investigation through construction management to property 
                management, ensuring seamless coordination and optimal investment returns across Nigeria.
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-500 font-medium">Client Satisfaction Rate</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-96" data-aos="fade-left"> 
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop"
              alt="SAMLORIDEN real estate development construction management Nigeria"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white border-1 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-96"
           style={{ borderColor: 'var(--color-primary-alt)' }}
            data-aos="fade-up"
          >            
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-gray-700" />
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-3">
                Sustainable Engineering & Smart Construction
              </h5>
              <p className="text-gray-600 leading-relaxed mb-4">
                Advanced BIM technology, green building materials, renewable energy integration, and 
                climate-resilient design solutions that optimize long-term property performance and value.
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-3xl font-bold text-gray-900">25+</div>
              <div className="text-sm text-gray-500 font-medium">Years Engineering Experience</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-96" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1567496898669-ee935f5317be?w=500&h=400&fit=crop"
              alt="SAMLORIDEN infrastructure engineering sustainable construction Nigeria"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SamloridensWhyChooseUsSection;