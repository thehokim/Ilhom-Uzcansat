import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../assets/CanSat_with_its_parachute 1.png';
import image2 from '../assets/image-15 1.png';
import image3 from '../assets/IMG_1683.png';
import image4 from '../assets/image 17.png';
import image5 from '../assets/image 9.png';
import image6 from '../assets/image 20.png';

const images1 = [image1, image2, image3];
const images2 = [image4, image5, image6];

const SecondConSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images1.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-4 lg:px-24">
      <div className="bg-white px-16 py-8 rounded-xl">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Section with Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Развитие навыков и международное сотрудничество в аэрокосмосе
            </h2>
            <p className="text-gray-600 mb-6">
              Участники проекта приобретают опыт создания спутников, учатся проектировать,
              собирать и тестировать космические аппараты. Конкурс способствует развитию
              молодых специалистов, укреплению международного сотрудничества и открывает
              путь к участию в мировых соревнованиях.
            </p>
            <button className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg">
              Подать заявку
            </button>
          </div>

          {/* Right Section with Stacked Images */}
          <div className="bg-[#Fcfcfd] py-4 w-[712px] h-[620px] rounded-lg border border-[#f1f1f3] flex justify-center items-center">
            <div className="relative w-[60%] h-[60%]">
              <motion.img
                src={images1[(currentIndex + 2) % images1.length]}
                className="absolute rounded-lg shadow-lg object-cover w-full h-full -translate-x-8 translate-y-8 opacity-75 rotate-[-8deg] border-[2px] border-[#f1f1f3]"
              />
              <motion.img
                src={images1[(currentIndex + 1) % images1.length]}
                className="absolute rounded-lg shadow-lg object-cover w-full h-full -translate-x-4 translate-y-4 opacity-85 rotate-[-5deg] border-[2px] border-[#f1f1f3]"
              />
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images1[currentIndex]}
                  alt="Competition"
                  className="absolute rounded-lg shadow-lg object-cover w-full h-full border-[2px] border-[#f1f1f3]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
          
          {/* Left Section with Stacked Images */}
          <div className="bg-[#Fcfcfd] py-4 w-[712px] h-[620px] rounded-lg border border-[#f1f1f3] flex justify-center items-center">
          <div className="relative w-[60%] h-[60%]">
          <motion.img
                src={images2[(currentIndex + 2) % images2.length]}
                className="absolute rounded-lg shadow-lg object-cover w-full h-full -translate-x-8 translate-y-8 opacity-75 rotate-[-8deg] border-[2px] border-[#f1f1f3]"
              />
              <motion.img
                src={images2[(currentIndex + 1) % images2.length]}
                className="absolute rounded-lg shadow-lg object-cover w-full h-full -translate-x-4 translate-y-4 opacity-85 rotate-[-5deg] border-[2px] border-[#f1f1f3]"
              />
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images2[currentIndex]}
                  alt="Competition"
                  className="absolute rounded-lg shadow-lg object-cover w-full h-full border-[2px] border-[#f1f1f3]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1 }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right Section with Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Первый конкурс CanSat в Узбекистане: прояви свой талант в аэрокосмосе
            </h2>
            <p className="text-gray-600 mb-6">
              Уникальная возможность для школьников и студентов проявить инженерные и
              научные способности. Участники разрабатывают спутники, собирают ракеты, тестируют
              и запускают их.
              <br /><br />
              <strong>Организатор:</strong> Агентство "Узбеккосмос"<br />
              <strong>Дата проведения:</strong> 12-13 апреля 2025 года, Ташкентская область.<br />
              <strong>Ожидается:</strong> 1000 зрителей.
            </p>
            <button className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg">
              Подать заявку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondConSec;
