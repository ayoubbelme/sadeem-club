import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bac.css';
import a from '../../assets/images/activities/Bac/bactitle.svg';
import img1 from '../../assets/images/activities/Bac/image1.jpg';
import img2 from '../../assets/images/activities/Bac/image2.jpg';
import img3 from '../../assets/images/activities/Bac/image3.jpg';
import img4 from '../../assets/images/activities/Bac/image4.jpg';
import { Helmet } from 'react-helmet';

const Bac = () => {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto my-10 p-6 space-y-12 relative">
            <Helmet>
                <title>حملة أرشدني</title>
            </Helmet>
            
            <button
                onClick={() => navigate('/')}
                className="absolute -top-10 left-0 md:-top-10 md:left-0 bg-primary text-white px-6 py-2 rounded-br-full shadow-lg hover:bg-third transition"
            >
                العودة إلى الصفحة الرئيسية
            </button>

            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">حملة أرشدني</h1>

            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                    <img 
                        src={a} 
                        alt="Main Visual" 
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 text-right space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        هي حملة موجهة للتلاميذ و خاصة الناجحين في شاهدة البكالوريا للتعرف على كل التخصصات الجامعية و افاقها 
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed"> 📣 ماهو دور المرشدين في الحملة؟!</p>
                    <p className="text-xl text-primary leading-relaxed font-bold">التوجيه العام</p>
                    <ul className="mr-5">
                        <li className="text-lg text-gray-700 leading-relaxed">نظرة عامة على الجامعة و الاقامات الجامعية-</li>
                        <li className="text-lg text-gray-700 leading-relaxed"> LMDنظرة عامة حول نظام-</li>
                    </ul>
                    <p className="text-xl text-primary leading-relaxed font-bold">التوجيه المتخصص</p>
                    <ul className="mr-5">
                        <li className="text-lg text-gray-700 leading-relaxed">كيفية حساب المعدل الموزون للتخصص-</li>
                        <li className="text-lg text-gray-700 leading-relaxed">واقعية قبول الاختيار المطلوب-</li>
                        <li className="text-lg text-gray-700 leading-relaxed">نظرة مفصلة حول التخصص-</li>
                        <li className="text-lg text-gray-700 leading-relaxed">الافاق المستقبلية ما بعد التخرج-</li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <img 
                    src={img1} 
                    alt="Below Image 1" 
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
                <img 
                    src={img2} 
                    alt="Below Image 2" 
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
                <img 
                    src={img3} 
                    alt="Below Image 3" 
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
                <img 
                    src={img4} 
                    alt="Below Image 4" 
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
            </div>
        </div>
    );
};

export default Bac;
