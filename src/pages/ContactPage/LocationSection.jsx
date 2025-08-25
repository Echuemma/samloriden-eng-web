// LocationSection.jsx
import React from 'react';

const LocationSection = () => {
  return (
 <section id="location" className="py-4 sm:py-6 md:py-16 lg:py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-0 sm:mb-8 md:mb-10 lg:mb-4 text-center lg:text-left"
          style={{color: 'var(--color-primary-alt, #1f2937)'}}>
          Our Location
        </h5>

        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[450px] xl:h-[500px] rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden">
          <iframe
            title="Our Location - Central Market Kubwa Abuja"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63023.89744217833!2d7.2700233189583345!3d9.155049929625491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBlock%20C&#39;2%2024%20Central%20market%20Kubwa%C2%A0Abuja!5e0!3m2!1sen!2sng!4v1756117008180!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full">
          </iframe>
        </div>
      </div>
    </section>
    
  );
};

export default LocationSection;