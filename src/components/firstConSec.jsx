import React from 'react';
import imgGlobal from '../assets/1.png';
import imgUzbekistan from '../assets/5.png';
import americanLogo from '../assets/3.png';
import nasaLogo from '../assets/6.png';
import turkishLogo from '../assets/2.png';
import azerLogo from '../assets/4.png';

const FirstConSec = () => {
    return (
        <section className="bg-gray-100 py-16 px-4 lg:px-24">
            <div className="mb-12">
                <div className='grid grid-cols-2 items-center mb-24'>
                    <h2 className="text-4xl font-bold text-gray-900">О конкурсе</h2>
                    <p className="text-gray-600 mt-4 text-left w-[510px] absolute right-24">
                        На мероприятии прошёл конкурс пневмо-гидро ракет, созданных школьниками.
                        Самодельные ракеты взлетали в небо, вдохновляя молодёжь на науку и технику.
                    </p></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Global Scale */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <img src={imgGlobal} alt="Global Scale" className="w-full rounded-lg mb-4" />
                </div>

                {/* Prestigious Organizers */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <div className="grid grid-cols-2 gap-8 mb-4">
                        <img src={americanLogo} alt="American Astronautical Society" className="w-full h-full object-contain" />
                        <img src={nasaLogo} alt="NASA" className="w-full h-full object-contain" />
                        <img src={turkishLogo} alt="Turkish Space Agency" className="w-full h-full object-contain" />
                        <img src={azerLogo} alt="Azer Cosmos" className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* Growth in Uzbekistan */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <img src={imgUzbekistan} alt="Uzbekistan Growth" className="w-full rounded-lg mb-4" />
                </div>
            </div>
            <div className='grid grid-cols-3 mt-8 gap-8'>
                <div className='w-[519px]'>
                    <h3 className="text-xl font-bold text-gray-900">Глобальный масштаб</h3>
                    <p className="text-gray-600 mt-2">
                        Конкурс CanSat проводится более чем в 30 странах мира, объединяя энтузиастов аэрокосмоса со всего мира.
                    </p>
                </div>
                <div className='w-[519px]'>
                    <h3 className="text-xl font-bold text-gray-900">Престижные организаторы</h3>
                    <p className="text-gray-600 mt-2 text-left">
                        Проект поддерживают American Astronautical Society и NASA,
                        гарантируя высокий уровень мероприятия.
                    </p>
                </div>
                <div className='w-[519px]'>
                    <h3 className="text-xl font-bold text-gray-900">Развитие в Узбекистане</h3>
                    <p className="text-gray-600 mt-2">
                        Ежегодно более 200 школьников и студентов участвуют в конкурсе,
                        с перспективой увеличения до 1000 участников.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FirstConSec;

{/* <h3 className="text-xl font-bold text-gray-900">Глобальный масштаб</h3>
<p className="text-gray-600 mt-2">
  Конкурс CanSat проводится более чем в 30 странах мира, объединяя энтузиастов аэрокосмоса со всего мира.
</p> */}

{/* <h3 className="text-xl font-bold text-gray-900">Престижные организаторы</h3>
<p className="text-gray-600 mt-2 text-center">
  Проект поддерживают American Astronautical Society и NASA, 
  гарантируя высокий уровень мероприятия.
</p> */}

{/* <h3 className="text-xl font-bold text-gray-900">Развитие в Узбекистане</h3>
<p className="text-gray-600 mt-2">
  Ежегодно более 200 школьников и студентов участвуют в конкурсе, 
  с перспективой увеличения до 1000 участников.
</p> */}