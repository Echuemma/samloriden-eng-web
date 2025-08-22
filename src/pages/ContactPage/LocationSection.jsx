// LocationSection.jsx
import React from 'react';

const LocationSection = () => {
  return (
    <section id="location" className="py-4 sm:py-6 md:py-16 lg:py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-0 sm:mb-8 md:mb-10 lg:mb-4 text-center lg:text-left"
          style={{
            color: 'var(--color-primary-alt, #1f2937)',
          }}
        >Our Location</h5>

        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[450px] xl:h-[500px] rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13133.215496491668!2d135.4601301!3d34.6937398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0df8e9b1c91%3A0x984a5d0b781c0c82!2sOsaka%2C%20Japan!5e0!3m2!1sen!2sng!4v1698844697817!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;