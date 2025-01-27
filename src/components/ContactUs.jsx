import React, { useState } from 'react';
import uzbekFlag from '../assets/UZ.svg';
import cansatLogo from '../assets/Logo.svg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gray-100 py-16 px-8 lg:px-24">
      <div className="mx-auto bg-[#fcfcfd] rounded-xl p-10 flex items-center">
        
        {/* Left Section */}
        <div className="w-1/2">
          <img src={cansatLogo} alt="CANSAT Logo" className="w-52 mb-12 ml-48" />
          <h2 className="text-5xl font-bold text-gray-900 mb-2">
            На связи с космосом — задайте вопрос!
          </h2>
        </div>

        {/* Right Section */}
        <div className="w-2/3 bg-gray-50 p-8 rounded-lg border border-px border-[#f1f1f3]">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Имя</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Введите имя"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full outline-none px-4 py-3 border border-gray-300 bg-white rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Фамилия</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Введите фамилию"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full outline-none px-4 py-3 border border-gray-300 bg-white rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Введите ваш Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 outline-none border border-gray-300 bg-white rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Номер телефона</label>
                <div className="flex items-center border bg-white border-gray-300 rounded-lg px-4 py-3">
                    <img src={uzbekFlag} alt="Uzbekistan Flag" className="w-8 h-6 mr-2" />
                    <span className="text-gray-700 font-semibold">+998</span>
                    <input
                    type="text"
                    name="phone"
                    placeholder="Введите номер телефона"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full outline-none ml-2 text-gray-900 placeholder-gray-400 "
                    />
                </div>
                </div>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 font-medium mb-1">Сообщение</label>
              <textarea
                name="message"
                placeholder="Введите ваше сообщение"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border outline-none border-gray-300 bg-white rounded-lg h-32"
              ></textarea>
            </div>
        <div className='flex justify-between items-center'>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                className="mr-2 w-5 h-5 mb-1"
              />
              <label className="text-gray-600 text-sm">
                Я согласен с{' '}
                <a href="#" className="text-red-500 underline">
                  Условиями использования
                </a>{' '}
                и{' '}
                <a href="#" className="text-red-500 underline">
                  Политикой конфиденциальности
                </a>
              </label>
            </div>

            <div className="mt-6 text-right">
              <button
                type="submit"
                className="bg-red-500 text-white font-bold py-3 px-6 rounded-2xl flex items-center gap-2 mb-2"
              >
                Отправить
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.69362 12.0002L2.29933 3.27199C2.0631 2.66452 2.65544 2.08358 3.2414 2.29007L3.33375 2.32933L21.3337 11.3293C21.852 11.5885 21.8844 12.298 21.4309 12.6134L21.3337 12.671L3.33375 21.671C2.75077 21.9625 2.11746 21.4265 2.2688 20.8239L2.29933 20.7283L5.69362 12.0002L2.29933 3.27199L5.69362 12.0002ZM4.4021 4.54056L7.01109 11.2496L13.6387 11.2502C14.0184 11.2502 14.3322 11.5323 14.3818 11.8984L14.3887 12.0002C14.3887 12.3798 14.1065 12.6936 13.7404 12.7433L13.6387 12.7502L7.01109 12.7496L4.4021 19.4597L19.3213 12.0002L4.4021 4.54056Z" fill="white"/>
</svg>

              </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
