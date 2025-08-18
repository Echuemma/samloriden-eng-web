
import React from 'react';
 import ServicesBanner from '../components/sections/ServicesBanner'
 import ServicesContent from '../components/sections/ServicesContent'
 import HowItWorksSection from '../components/sections/HowItWorksSection'
 import WhyChooseUs from '../components/sections/whyChooseUs'


function Services() {
  return (
    <div className="service-page overflow-y-hidden overflow-x-hidden">
      <ServicesBanner />
      <ServicesContent />
      <HowItWorksSection />
      <WhyChooseUs />
    </div>
  );
}

export default Services;