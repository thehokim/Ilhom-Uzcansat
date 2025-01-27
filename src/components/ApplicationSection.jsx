import React from 'react';
import { ArrowUpRight, Twitter, Facebook, Linkedin } from 'lucide-react';

const ApplicationSection = () => {
  return (
    <div className='bg-gray-100 px-24 py-12'>
    <div className="bg-white py-12 px-16 rounded-xl border border-[#f1f1f3]">
      <div className="grid grid-cols-4 gap-8 items-start">
        
        {/* Обратная связь */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Обратная связь</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">
              <span className="text-gray-800">info@uzspace.uz</span>
              <ArrowUpRight className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">
              <span className="text-gray-800">uzkosmos@exat.uz</span>
              <ArrowUpRight className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">
              <span className="text-gray-800">+998 55 502-50-22</span>
              <ArrowUpRight className="w-5 h-5 text-gray-600" />
            </div>
            
          </div>
        </div>

        {/* Время работы */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Время работы</h3>
          <p className="text-gray-700">
            Рабочие дни: понедельник-пятница, с 9:00 до 18:00
            <br />
            <span className="text-gray-500">(Обед: с 13:00 до 14:00)</span>
          </p>
        </div>

        {/* Наш офис */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Наш офис</h3>
          <p className="text-gray-700">Адрес: улица Мумионова, 7/1</p>
          <div className="mt-3">
            <button className="flex items-center bg-gray-100 px-4 py-3 rounded-lg text-gray-800 font-medium">
              Смотреть на карте
              <ArrowUpRight className="ml-2 w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Свяжитесь с нами */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Свяжитесь с нами</h3>
          <div className="flex space-x-4">
            <button className="bg-gray-100 p-3 rounded-lg">
              <Twitter className="w-5 h-5 text-gray-800" />
            </button>
            <button className="bg-gray-100 p-3 rounded-lg">
              <Facebook className="w-5 h-5 text-gray-800" />
            </button>
            <button className="bg-gray-100 p-3 rounded-lg">
              <Linkedin className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default ApplicationSection;
