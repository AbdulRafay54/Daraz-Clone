import React from 'react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200",
    alt: "Electronics Sale"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200",
    alt: "Fashion Sale"
  }
];

export const Hero = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <img 
          src={slides[0].image} 
          alt={slides[0].alt}
          className="w-full h-[400px] object-cover"
        />
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-2 h-2 rounded-full ${
              index === 0 ? 'bg-[#f85606]' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};