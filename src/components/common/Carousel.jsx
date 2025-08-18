// Carousel.js
import { useState, useEffect } from "react";

export default function Carousel({ items, autoPlay = true, interval = 5000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h5 className="text-xl md:text-2xl text-on-dark font-bold mb-2">{item.title}</h5>
            <p className="text-white/90 text-sm md:text-lg">{item.description}</p>
          </div>
        </div>
      ))}

      {/* Dots */}
 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
  {items.map((_, index) => (
    <button
      key={index}
      onClick={() => goToSlide(index)}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        index === currentSlide
          ? "bg-[var(--color-primary-alt)] scale-125"
          : "bg-white/40 hover:bg-white/60"
      }`}
    />
  ))}
</div>

    </div>
  );
}
