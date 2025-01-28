import React from 'react';
import { ArrowUpRight, Twitter, Facebook, Linkedin } from 'lucide-react';

const ApplicationSection = () => {
    return (
        <div id='apply' className='bg-gray-100 px-24 py-12'>
            <div className="bg-white py-12 px-16 rounded-xl border border-[#f1f1f3]">
                <div className="grid grid-cols-4 gap-8 items-start">

                    {/* Обратная связь */}
                    <div className='border-r border-[#f1f1f3] px-6'>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Обратная связь</h3>
                        <div className="space-y-3">
                            {/* Email Link 1 */}
                            <a
                                href="mailto:info@uzspace.uz"
                                className="flex items-center justify-between bg-white border border-[#f1f1f3] rounded-lg px-4 py-3 hover:bg-[#ffeeee]/50 transition group"
                            >
                                <span className="text-gray-800">info@uzspace.uz</span>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-gray-600 transition group-hover:text-[#FF5454]"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z"
                                    />
                                </svg>
                            </a>


                            {/* Email Link 2 */}
                            <a
                                href="mailto:uzkosmos@exat.uz"
                                className="flex items-center justify-between bg-white border border-[#f1f1f3] rounded-lg px-4 py-3 hover:bg-[#ffeeee]/50 transition group"
                            >
                                <span className="text-gray-800">uzkosmos@exat.uz</span>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-gray-600 transition group-hover:text-[#FF5454]"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z"
                                    />
                                </svg>
                            </a>


                            {/* Phone Link */}
                            <a
                                href="tel:+998555025022"
                                className="flex items-center justify-between bg-white border border-[#f1f1f3] rounded-lg px-4 py-3 hover:bg-[#ffeeee]/50 transition group"
                            >
                                <span className="text-gray-800">+998 55 502-50-22</span>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-gray-600 transition group-hover:text-[#FF5454]"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z"
                                    />
                                </svg>
                            </a>

                        </div>
                    </div>

                    {/* Время работы */}
                    <div className='border-r border-[#f1f1f3] px-6 h-[212px]'>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Время работы</h3>
                        <p className="text-gray-700">
                            Рабочие дни: понедельник-пятница, с 9:00 до 18:00
                            <br />
                            <span className="text-gray-500">(Обед: с 13:00 до 14:00)</span>
                        </p>
                    </div>

                    {/* Наш офис */}
                    <div className='border-r border-[#f1f1f3] px-6 h-[212px]'>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Наш офис</h3>
                        <p className="text-gray-700">Адрес: улица Мумионова, 7/1</p>
                        <div className="mt-3">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=улица+Мумионова+7/1&zoom=17"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between bg-white border border-[#f1f1f3] w-[220px] px-6 py-3 rounded-lg text-gray-800 font-medium hover:bg-[#ffeeee]/50 transition group"
                            >
                                Смотреть на карте
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-gray-600 transition group-hover:text-[#FF5454] -mr-3"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z"
                                    />
                                </svg>
                            </a>



                        </div>
                    </div>

                    {/* Свяжитесь с нами */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Свяжитесь с нами</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/uzbspace/?_rdr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white border border-px hover:bg-[#ffeeee]/50 border-[#f1f1f3] py-2 px-6 rounded-lg flex items-center justify-center"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.2137 13.3283L17.8356 9.23311H13.9452V6.5768C13.9452 5.45617 14.4877 4.3632 16.2301 4.3632H18V0.876797C18 0.876797 16.3945 0.600098 14.8603 0.600098C11.6548 0.600098 9.56164 2.56189 9.56164 6.11194V9.23311H6V13.3283H9.56164V23.2285C10.2767 23.342 11.0082 23.4001 11.7534 23.4001C12.4986 23.4001 13.2301 23.342 13.9452 23.2285V13.3283H17.2137Z"
                                        fill="#040418"
                                    />
                                </svg>
                            </a>

                            <a
                                href="https://youtube.com/@uzbekkosmos6411?si=Fisc2c6JQNSGfs9H"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white border border-px hover:bg-[#ffeeee]/50 border-[#f1f1f3] py-2 px-6 rounded-lg flex items-center justify-center"
                            >
                                <svg
                                    width="24"
                                    height="18"
                                    viewBox="0 0 24 18"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M21.3904 1.1141C22.4184 1.39087 23.2289 2.20141 23.5057 3.22941C24.0197 5.10749 23.9999 9.02181 23.9999 9.02181C23.9999 9.02181 23.9999 12.9164 23.5057 14.7944C23.2289 15.8224 22.4184 16.633 21.3904 16.9097C19.5123 17.404 11.9999 17.404 11.9999 17.404C11.9999 17.404 4.50739 17.404 2.60954 16.89C1.58154 16.6132 0.771002 15.8027 0.494232 14.7747C0 12.9164 0 9.00204 0 9.00204C0 9.00204 0 5.10749 0.494232 3.22941C0.771002 2.20141 1.60131 1.3711 2.60954 1.09433C4.48762 0.600098 11.9999 0.600098 11.9999 0.600098C11.9999 0.600098 19.5123 0.600098 21.3904 1.1141ZM15.855 9.00182L9.60791 12.5998V5.40381L15.855 9.00182Z"
                                        fill="#040418"
                                    />
                                </svg>
                            </a>

                            <a
                                href="https://t.me/uzbekkosmos_uz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white border border-px hover:bg-[#ffeeee]/50 border-[#f1f1f3] py-2 px-6 rounded-lg flex items-center justify-center"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.03702 11.2933C8.23851 8.59144 12.3738 6.81019 14.4429 5.94958C20.3506 3.49236 21.5782 3.06551 22.3783 3.05142C22.5543 3.04832 22.9478 3.09193 23.2026 3.29875C23.4178 3.47337 23.4771 3.70927 23.5054 3.87484C23.5337 4.04041 23.569 4.41758 23.541 4.71228C23.2208 8.07603 21.8356 16.2389 21.1308 20.0064C20.8326 21.6005 20.2455 22.1351 19.677 22.1874C18.4417 22.301 17.5036 21.371 16.3071 20.5866C14.4348 19.3593 13.3771 18.5953 11.5597 17.3977C9.4594 16.0136 10.8209 15.2529 12.0179 14.0097C12.3311 13.6844 17.7742 8.73353 17.8795 8.28441C17.8927 8.22824 17.9049 8.01887 17.7805 7.90831C17.6561 7.79775 17.4726 7.83556 17.3401 7.86563C17.1523 7.90825 14.1613 9.88519 8.36704 13.7965C7.51805 14.3794 6.74906 14.6635 6.06007 14.6486C5.30052 14.6322 3.83945 14.2191 2.75329 13.8661C1.42107 13.433 0.36225 13.2041 0.454449 12.4686C0.502472 12.0855 1.03 11.6938 2.03702 11.2933Z"
                                        fill="#040418"
                                    />
                                </svg>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ApplicationSection;
