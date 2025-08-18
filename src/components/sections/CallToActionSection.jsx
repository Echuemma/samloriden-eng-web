import React from "react";
import useAOS from "../../hooks/useAOS";

export default function CallToActionSection({
  badge = "Call To Action",
  title = "Ready to Build Your Vision?",
  description = "Let's bring your ideas to life. Whether it's a home, commercial space, or large-scale development, our expert team is here to guide you every step of the way. Contact us today to get started on your next project with confidence.",
  children,
}) {
  useAOS({ duration: 1000, once: true });

  return (
    <section className="py-8 px-2 sm:px-4 max-w-7xl mx-auto" data-aos="fade-up">
      <div
        className="
          bg-gray-200 
          p-6 sm:p-10 lg:p-16 
          text-center 
          relative 
          w-full sm:w-11/12 lg:w-4/5 
          mx-auto
        "
        style={{
          borderRadius: "20px",
          clipPath:
            "polygon(20% 0%, 100% 0%, 100% 82%, 82% 100%, 0% 100%, 0% 20%)",
        }}
      >
        <div className="inline-flex items-center bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
          {badge}
        </div>
        <h5 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 leading-tight">
          {title}
        </h5>
        <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto mb-8 leading-relaxed px-2">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {children}
        </div>
      </div>
    </section>
  );
}
