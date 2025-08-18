import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercentage(Math.round(scrollPercent));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-[99999] flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 sm:bottom-6 sm:right-6 rounded-full text-white shadow-lg cursor-pointer transition-transform duration-200 hover:scale-110"
      onClick={scrollToTop}
      style={{
        backgroundColor: 'var(--color-primary-alt)',
        transition: 'background-color 0.3s ease',
      }}
    >
      {scrollPercentage < 100 ? (
        <span className="text-sm sm:text-lg font-bold">{scrollPercentage}%</span>
      ) : (
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
      )}
    </div>
  );
};

export default ScrollProgress;