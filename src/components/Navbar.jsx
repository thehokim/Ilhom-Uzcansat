import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import ContactButton from './NumButton';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Партнёры');

  return (
    <nav className="bg-transparent fixed w-full z-20 top-0 left-0 border-b border-px border-[#F1F1F3]/40">
      <div className=" flex flex-wrap items-center justify-between w-full p-4 ml-">
        
        {/* <a href="#" className="flex items-center space-x-3">
          <img src={Logo} className="h-16" alt="CANSAT Logo" />
        </a> */}

        <div className="flex md:order-2 space-x-3 md:space-x-0 pr-[110px]">
          <ContactButton />
        </div>

        <div className="w-full md:flex md:items-center md:w-auto gap-[32px] pl-[110px]">
        <a href="#" className="flex items-center space-x-8">
          <img src={Logo} className="h-16" alt="CANSAT Logo" />
        </a>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-transparent rounded-lg 
                         md:space-x-8 md:flex-row md:mt-0 md:border-0">
            {['Партнёры', 'О конкурсе', 'Спонсоры', 'Участники', 'Галерея'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => setActiveLink(item)}
                  className={`flex py-3 px-6 rounded-lg transition-all ${
                    activeLink === item
                      ? 'bg-gray-500 text-white font-bold'
                      : 'text-white hover:text-[#052260]'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
