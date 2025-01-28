import React from 'react';
import imgGlobal from '../assets/1.png';
import imgUzbekistan from '../assets/5.png';
import americanLogo from '../assets/3.png';
import nasaLogo from '../assets/6.png';
import turkishLogo from '../assets/2.png';
import azerLogo from '../assets/4.png';

const FirstConSec = () => {
    return (
        <section className="bg-gray-100 py-16 px-4 md:px-12 lg:px-24">
            {/* Header Section */}
            <div className="mb-12">
                <div className="grid md:grid-cols-2 items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        О конкурсе
                    </h2>
                    <p className="text-gray-600 mt-4 md:mt-0 text-sm md:text-base lg:text-lg text-left max-w-md md:max-w-lg lg:max-w-2xl mx-auto md:ml-auto">
                        На мероприятии прошёл конкурс пневмо-гидро ракет, созданных школьниками.
                        Самодельные ракеты взлетали в небо, вдохновляя молодёжь на науку и технику.
                    </p>
                </div>
            </div>

            {/* Image and Logo Section */}
            <div className="grid gap-8 md:grid-cols-3">
                {/* Global Scale Image */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <img src={imgGlobal} alt="Global Scale" className="w-full rounded-lg mb-4" />
                </div>

                {/* Prestigious Organizers Logos */}
                <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow-sm">
                    <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-4">
                        <img
                            src={americanLogo}
                            alt="American Astronautical Society"
                            className="w-full h-full object-contain"
                        />
                        <img
                            src={nasaLogo}
                            alt="NASA"
                            className="w-full h-full object-contain"
                        />
                        <img
                            src={turkishLogo}
                            alt="Turkish Space Agency"
                            className="w-full h-full object-contain"
                        />
                        <img
                            src={azerLogo}
                            alt="Azer Cosmos"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Uzbekistan Growth Image */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <img src={imgUzbekistan} alt="Uzbekistan Growth" className="w-full rounded-lg mb-4" />
                </div>
            </div>

            {/* Description Section */}
            <div className="grid gap-8 mt-12 md:grid-cols-3">
                {/* Global Scale Description */}
                <div className="max-w-md mx-auto">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        Глобальный масштаб
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                        Конкурс CanSat проводится более чем в 30 странах мира,
                        объединяя энтузиастов аэрокосмоса со всего мира.
                    </p>
                </div>

                {/* Prestigious Organizers Description */}
                <div className="max-w-md mx-auto">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        Престижные организаторы
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                        Проект поддерживают American Astronautical Society и NASA,
                        гарантируя высокий уровень мероприятия.
                    </p>
                </div>

                {/* Uzbekistan Growth Description */}
                <div className="max-w-md mx-auto">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        Развитие в Узбекистане
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                        Ежегодно более 200 школьников и студентов участвуют в конкурсе,
                        с перспективой увеличения до 1000 участников.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FirstConSec;
