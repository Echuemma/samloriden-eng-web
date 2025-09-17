import React from 'react';
import useAOS from '../../hooks/useAOS';

export default function AboutUsBanner() {
  useAOS({ duration: 1000, once: true });

  return (
    <>
      <div className="relative w-full h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-6">
            <h1 className="text-on-dark text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-wide" data-aos="fade-right">
              About Us
            </h1>
            <div className="mt-4 w-24 h-0.5 bg-white mx-auto opacity-60"></div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="text-white py-16 px-6 md:px-12 lg:px-16"
            style={{ backgroundColor: "var(--color-bg-dark)" }}

      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-5" data-aos="fade-down">
            <h4 className="text-4xl md:text-5xl lg:text-6xl font-light text-on-dark leading-tight">
              Building the future with precision and integrity. <br />
              Engineering excellence since 2001.
            </h4>
          </div>

          <div className="mb-16" data-aos="fade-up">
            {/* <p className="text-[var(--color-text-light)] leading-relaxed text-lg max-w-3xl text-justify">
              At SAMLORIDEN ENGINEERING AND CONSULTANCY LTD, we bring over two decades of trusted experience in civil engineering, construction, and strategic consultancy. Since 2001, our passion has been transforming ideas into infrastructure delivering innovative and sustainable solutions across residential, commercial, and industrial projects. From foundational design to final execution, we combine technical expertise, quality materials, and a commitment to excellence to exceed expectations. Our consultancy services empower clients with data-driven guidance, helping them navigate complex projects with clarity and confidence. At Samloriden, we don't just build we shape environments, empower communities, and create lasting value.
            </p> */}

            <p>
              SAMLORIDEN Engineering is a full-service real estate development firm dedicated to transforming visions into lasting value. From the initial concept to handing over the keys, we manage the entire property development cycle with precision, innovation, and integrity. Our business model integrates every phase of the property journey — land acquisition, design and planning, construction, marketing, and sales — ensuring quality, efficiency, and client satisfaction at every step.

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="hidden md:block"></div>

            <div>
              <h3 className="text-2xl font-semibold text-on-dark mb-3" data-aos="fade-down">Mission</h3>
              <p className="text-[var(--color-text-light)] text-sm leading-relaxed text-justify" data-aos="fade-up">
                To deliver high-quality, thoughtfully designed, and efficiently executed properties that meet the evolving needs of modern living and business.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-on-dark mb-3" data-aos="fade-down">Vision</h3>
              <p className="text-[var(--color-text-light)] text-sm  leading-relaxed text-justify" data-aos="fade-up">
                To be a leading force in real estate development by building spaces that inspire, endure, and elevate lifestyles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-[95%] h-54 md:h-[450px] bg-primary overflow-hidden mx-auto mt-8 md:mt-16 mb-8 md:px-0 rounded-xl">
        <div className="h-full">
          <video
            className="w-full h-full object-cover rounded-xl"
            autoPlay
            loop
            playsInline
            controls
            data-aos="fade-up"
          >
            <source src="/videos/about/COMPANY.mp4" type="video/mp4" />
            <source src="/videos/about/company-showcase.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white py-6 px-6 z-10 hidden md:block">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-on-dark">
              Our Projects in Action
            </h3>
            <p className="text-sm md:text-base opacity-90">
              Experience our commitment to engineering excellence and innovative construction solutions.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}