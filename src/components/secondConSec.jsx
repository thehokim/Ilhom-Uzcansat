import React, { useState, useEffect } from 'react';
import image1 from '../assets/CanSat_with_its_parachute 1.png';
import image2 from '../assets/image-15 1.png';
import image3 from '../assets/IMG_1683.png';
import image4 from '../assets/image 17.png';
import image5 from '../assets/image 9.png';
import image6 from '../assets/image 20.png';
import ApplyButton from './ApplyButton';

const images1 = [image1, image2, image3];
const images2 = [image4, image5, image6];

const SecondConSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start animation after 3 seconds
    const startTimeout = setTimeout(() => {
      setIsAnimating(true);
    }, 3000);

    // Change image every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images1.length);
    }, 5000);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-4 lg:px-24">
      <div className="bg-white px-16 py-8 rounded-xl">
        {/* First Row */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Section with Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Развитие навыков и международное сотрудничество в аэрокосмосе
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Участники проекта приобретают опыт создания спутников, учатся проектировать,
              собирать и тестировать космические аппараты. Конкурс способствует развитию
              молодых специалистов, укреплению международного сотрудничества и открывает
              путь к участию в мировых соревнованиях.
            </p>
            <ApplyButton />
          </div>

          {/* Right Section with Animated Images */}
          <div className="relative bg-[#Fcfcfd] py-4 w-[712px] h-[620px] rounded-lg border border-[#f1f1f3] flex justify-center items-center overflow-hidden">
            <div className="relative w-[60%] h-[60%]">
              {images1.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  className={`absolute w-full h-full rounded-lg object-cover border-[2px] border-[#f1f1f3] transition-all duration-1000 ease-in-out ${
                    !isAnimating
                      ? `opacity-${(index + 1) * 25} scale-95 rotate-[${index * 5}deg]`
                      : index === currentIndex
                      ? 'z-10 scale-100 rotate-0 opacity-100'
                      : (index + 1) % images1.length === currentIndex
                      ? 'z-5 scale-90 rotate-[15deg] opacity-75'
                      : 'z-0 scale-85 rotate-[30deg] opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
          {/* Left Section with Rotating Images */}
          <div className="relative bg-[#Fcfcfd] py-4 w-[712px] h-[620px] rounded-lg border border-[#f1f1f3] flex justify-center items-center overflow-hidden">
            <div className="relative w-[60%] h-[60%]">
              {images2.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  className={`absolute w-full h-full rounded-lg object-cover border-[2px] border-[#f1f1f3] transition-all duration-1000 ease-in-out ${
                    !isAnimating
                      ? `opacity-${(index + 1) * 25} scale-95 rotate-[${index * 5}deg]`
                      : index === currentIndex
                      ? 'z-10 scale-100 rotate-0 opacity-100'
                      : (index + 1) % images2.length === currentIndex
                      ? 'z-5 scale-90 rotate-[-15deg] opacity-75'
                      : 'z-0 scale-85 rotate-[-30deg]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Section with Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Первый конкурс CanSat в Узбекистане: прояви свой талант в аэрокосмосе
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Уникальная возможность для школьников и студентов проявить инженерные и
              научные способности. Участники разрабатывают спутники, собирают ракеты, тестируют
              и запускают их.
              <br /><br />
              <strong>Организатор:</strong> Агентство "Узбеккосмос"<br />
              <strong>Дата проведения:</strong> 12-13 апреля 2025 года, Ташкентская область.<br />
              <strong>Ожидается:</strong> 1000 зрителей.
            </p>
            <ApplyButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondConSec;
