import React, { useState } from 'react';
import axios from 'axios';
import uzbekFlag from '../assets/UZ.svg';
import LottieAnimation from './LottieAnimation';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agreement: false,
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/contacts/', {
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                phone_number: formData.phone,
                message: formData.message,
                agreement: formData.agreement,
            }, {
                auth: {
                    username: 'admin', 
                    password: 'Adminuzcansat123#@!', 
                }
            });

            setSuccess('Ваше сообщение успешно отправлено!');
            console.log('Form submitted successfully:', response.data);

            // Clear form fields after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
                agreement: false,
            });

        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
            setError('Ошибка при отправке формы. Попробуйте снова.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="bg-gray-100 py-16 px-8 lg:px-24">
            <div className="mx-auto bg-[#fcfcfd] rounded-xl p-10 flex items-center">
                {/* Left Section */}
                <div className="w-1/2">
                <LottieAnimation />
                    <h2 className="text-5xl font-bold text-gray-900 mb-2 -mt-16">
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
                                    required
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
                                    required
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
                                    required
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
                                        required
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
                                required
                            ></textarea>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center mt-4">
                                <input
                                    type="checkbox"
                                    name="agreement"
                                    checked={formData.agreement}
                                    onChange={handleChange}
                                    className="mr-2 w-5 h-5 mb-1"
                                    required
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
                                    className="bg-[#ff5454] hover:bg-red-500 border border-px border-[#cc4343] text-white font-bold py-2 px-6 rounded-lg flex items-center gap-2 mb-2"
                                    disabled={loading}
                                >
                                    {loading ? 'Отправка...' : 'Отправить'}
                                </button>
                            </div>
                        </div>
                    </form>

                    {success && <p className="text-green-500 mt-4">{success}</p>}
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
