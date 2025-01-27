import React, { useState } from 'react';

// Import all SVG images
import Card1 from '../assets/Card.svg';
import Card2 from '../assets/Card-1.svg';
import Card3 from '../assets/Card-2.svg';
import Card4 from '../assets/Card-3.svg';
import Card5 from '../assets/Card-4.svg';
import Card6 from '../assets/Card-5.svg';
import Card7 from '../assets/Card-6.svg';
import Card8 from '../assets/Card-7.svg';
import Card9 from '../assets/Card-8.svg';
import Card10 from '../assets/Card-9.svg';
import Card11 from '../assets/Card-10.svg';
import Card12 from '../assets/Card-11.svg';
import Card13 from '../assets/Card-12.svg';
import Card14 from '../assets/Card-13.svg';

const images = [
  Card1, Card2, Card3, Card4, Card5, Card6, Card7,
  Card8, Card9, Card10, Card11, Card12, Card13, Card14
];

const Carousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-gray-100 py-6 px-24">
      <div className="bg-white py-8 rounded-xl border border-px border-[#f1f1f3] overflow-hidden relative">
        <div 
          className="flex items-center space-x-10 w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="w-full overflow-hidden">
            <div 
              className="flex items-center animate-scroll" 
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {[...images, ...images].map((image, index) => (
                <div key={index} className="flex items-center group">
                  <img 
                    src={image} 
                    alt={`carousel-item-${index}`} 
                    className="h-20 w-auto max-w-[250px] object-contain transition-transform duration-300 group-hover:scale-120"
                  />
                  {/* Vertical divider for spacing */}
                  {index !== images.length * 2 - 1 && (
                    <div className="h-20 w-[1px] bg-[#f1f1f3]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
