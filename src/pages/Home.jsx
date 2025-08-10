 import React from 'react'
 import Hero from '../components/sections/Hero'
 import CaspiraAboutSection from '../components/sections/CaspiraAboutSection'
 import ConstructionServices from '../components/sections/ConstructionServices'
 import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'
 import CaspiraLanding from '../components/sections/CaspiraLanding'
 import TestimonialsSection from '../components/sections/TestimonialsSection'
 import BlogSection from '../components/sections/BlogSection'
function Home() {
  return (
    <div className="home-page">
  
      <Hero />
      <CaspiraAboutSection />
      <ConstructionServices />
      <WhyChooseUsSection />
      <CaspiraLanding />
      <TestimonialsSection />
      <BlogSection />
    </div>
  );
}

export default Home;