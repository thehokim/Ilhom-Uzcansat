import React from 'react';

const ApplyButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 100; // Stops scrolling 100 pixels above the section
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <button
      className="bg-[#ff5454] border border-px border-[#cc4343] text-white font-bold py-2 px-6 rounded-lg hover:bg-red-500 transition-all"
      onClick={scrollToContact}
    >
      Подать заявку
    </button>
  );
};

export default ApplyButton;
