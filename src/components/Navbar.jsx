import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.svg';
import ContactButton from './NumButton';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { name: 'О конкурсе', id: 'concourse' },
    { name: 'Галерея', id: 'firstSec' },
    { name: 'Партнёры', id: 'carousel' },
    { name: 'Спонсоры', id: 'price' },
  ];

  useEffect(() => {
    // Handle navbar background on scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.6, // 60% of the section must be visible
    };

    // Intersection Observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id); // Set the currently visible section as active
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect(); // Cleanup the observer
  }, [sections]);

  // Smooth scrolling to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed w-full h-[92px] z-20 top-0 left-0 border-b transition-all ${
        isScrolled
          ? 'bg-white text-gray-900 border-gray-300'
          : 'bg-transparent text-white border-[#F1F1F3]/40'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between w-full p-4">
        <div className="flex md:order-2 space-x-3 md:space-x-0 pr-[110px]">
          <ContactButton />
        </div>

        <div className="w-full md:flex md:items-center md:w-auto gap-[32px] pl-[110px]">
            <img src={Logo} className="h-16" alt="CANSAT Logo" />
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0">
            {sections.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`flex py-2 px-6 rounded-lg transition-all ${
                    activeLink === id
                      ? isScrolled
                        ? 'bg-[#f1f1f3]/90 text-gray-900 font-bold'
                        : 'bg-[#f1f1f3]/40 text-white font-bold'
                      : 'hover:text-[#052260]'
                  }`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
