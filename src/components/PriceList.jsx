import React from 'react';

// Import checkmark and cross icons
import okIcon from '../assets/ok.png';
import xIcon from '../assets/x.png';

const PriceList = () => {
  const plans = [
    {
      type: 'PLATINUM',
      price: '200 млн сум',
      benefits: [
        { text: 'Брендирование и присутствие на всех брендированных площадках', included: true },
        { text: 'Упоминание благодарности на открытии и финале', included: true },
        { text: 'Логотип на мерче каждой команды', included: true },
        { text: 'Персональная стойка для продукта спонсора', included: true },
        { text: 'Возможность выступить со спичем на открытии', included: true },
        { text: 'Логотип на цифровых материалах и соцсетях', included: true },
        { text: 'Логотип на официальных каналах мероприятия', included: true },
      ],
    },
    {
      type: 'GOLD',
      price: '110 млн сум',
      benefits: [
        { text: 'Брендирование и присутствие на всех брендированных площадках', included: true },
        { text: 'Упоминание благодарности на открытии и финале', included: true },
        { text: 'Логотип на мерче каждой команды', included: true },
        { text: 'Персональная стойка для продукта спонсора', included: true },
        { text: 'Возможность выступить со спичем на открытии', included: false },
        { text: 'Логотип на цифровых материалах и соцсетях', included: true },
        { text: 'Логотип на официальных каналах мероприятия', included: true },
      ],
    },
    {
      type: 'BRONZE',
      price: '70 млн сум',
      benefits: [
        { text: 'Брендирование и присутствие на всех брендированных площадках', included: false },
        { text: 'Упоминание благодарности на открытии и финале', included: true },
        { text: 'Логотип на мерче каждой команды', included: true },
        { text: 'Персональная стойка для продукта спонсора', included: false },
        { text: 'Возможность выступить со спичем на открытии', included: true },
        { text: 'Логотип на цифровых материалах и соцсетях', included: true },
        { text: 'Логотип на официальных каналах мероприятия', included: true },
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 lg:px-24">
      <div className="mx-auto text-center mt-12">
        <div className="grid grid-cols-2 mb-12 items-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-left">Спонсорские программы</h2>
          <p className="text-gray-600 mb-12 text-left w-[510px] absolute right-24">
            Станьте партнёром уникального конкурса и поддержите развитие науки и образования.
            Мы предлагаем гибкие спонсорские пакеты с широкими возможностями для продвижения вашего бренда.
          </p>
        </div>
      </div>
      <div className="bg-white py-12 rounded-xl">
        <div className="grid md:grid-cols-3 gap-8 px-12 mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="bg-[#fcfcfd] rounded-2xl p-8 border border-px border-[#f1f1f3] w-[498px]">
              <div className="bg-[#FFEEEE] border border-px text-2xl border-[#FFCACA] text-center py-1 rounded-md font-semibold text-gray-800">
                {plan.type}
              </div>
              <h1 className="text-5xl font-bold text-center text-gray-900 my-16">{plan.price}</h1>
              <div className="text-left bg-white border border-px border-[#f1f1f3] rounded-xl">
                <h2 className="font-bold text-2xl text-gray-800 mb-8 mt-8 text-center">Что включено ?</h2>
                <ul className="space-y-4">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center space-x-2 mx-6 px-4 py-2 border border-px border-[#f1f1f3] rounded-xl">
                      <img
                        src={benefit.included ? okIcon : xIcon}
                        alt={benefit.included ? 'Included' : 'Not included'}
                        className="w-8 h-8 mr-2"
                      />
                      <span className="text-gray-700">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-[430px] bg-red-500 text-white font-bold py-3 rounded-b-xl">
                Подать заявку
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceList;
