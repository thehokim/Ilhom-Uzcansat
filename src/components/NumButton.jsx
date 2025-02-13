import React from 'react';

const scrollToApply = () => {
    const contactSection = document.getElementById('apply');
    if (contactSection) {
      const offset = 50; // Stops scrolling 100 pixels above the section
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

const ContactButton = () => {
    return (
        <button className="py-2 px-6 bg-[#FF5454] border border-px border-[#CC4343] rounded-lg flex items-center justify-center space-x-3 hover:bg-red-500"
        onClick={scrollToApply}
>
            <span className='text-white font-medium text-[18px]'>Контакты</span>
            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.05646 1.41801L4.22346 1.06625C5.54596 0.667612 6.95896 1.31185 7.52531 2.57168L8.42698 4.5774C8.90972 5.65123 8.65533 6.91323 7.79427 7.71618L6.29997 9.10964C6.25629 9.15036 6.22864 9.20538 6.22201 9.26473C6.17765 9.66187 6.44688 10.4353 7.06715 11.5096C7.5182 12.2908 7.92644 12.8387 8.27394 13.1469C8.51604 13.3615 8.64932 13.408 8.70605 13.3911L10.7164 12.7765C11.842 12.4323 13.0618 12.8427 13.7505 13.7972L15.0312 15.5722C15.8373 16.6894 15.6924 18.2307 14.6921 19.178L13.8057 20.0174C12.8493 20.9232 11.4877 21.2607 10.219 20.9066C7.4649 20.1378 4.99559 17.8137 2.78372 13.9826C0.568772 10.1462 -0.20842 6.84179 0.508032 4.07C0.8359 2.80152 1.80203 1.79613 3.05646 1.41801ZM3.48936 2.85419C2.7367 3.08106 2.15702 3.68429 1.9603 4.44538C1.35765 6.7769 2.04651 9.70575 4.08276 13.2326C6.11629 16.7548 8.30523 18.8151 10.6223 19.4618C11.3835 19.6743 12.2004 19.4718 12.7743 18.9283L13.6606 18.0889C14.1153 17.6583 14.1812 16.9577 13.8148 16.4499L12.5341 14.6749C12.221 14.241 11.6666 14.0545 11.1549 14.2109L9.13958 14.8271C7.96987 15.1757 6.9082 14.2343 5.76811 12.2596C4.9998 10.9289 4.64171 9.90018 4.73128 9.09823C4.77768 8.6828 4.97125 8.29769 5.27697 8.0126L6.77127 6.61915C7.16266 6.25417 7.2783 5.68053 7.05887 5.19243L6.1572 3.18671C5.89977 2.61406 5.25749 2.32122 4.65636 2.50242L3.48936 2.85419Z" fill="white" />
            </svg>

        </button>
    );
};

export default ContactButton;
