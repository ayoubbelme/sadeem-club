import React from 'react';
import './Activities.css';
import activityImage from '../../assets/images/activities/undraw_date_picker_re_r0p8 (1).svg';

const Activities = () => {
    return (
        <>
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center mt-16" id="Activities">أنشطتنا</h1>

            <div className="container mx-auto p-6 flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-full md:w-1/2">
                    <img
                        src={activityImage}
                        alt="Activities"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                    <ul className="list-disc list-inside space-y-14" dir="rtl">
                        <li className="li hover:scale-105 transition duration-200 ease-in-out text-lg font-medium cursor-pointer list-none sm:py-30">
                            <a className='bg-transparent ' href='/Bac'> حملة أرشدني</a>
                        </li>
                        <li className="li hover:scale-105 transition duration-200 ease-in-out text-lg font-medium cursor-pointer list-none ">
                            <a className='bg-transparent ' href='/WorkShops'> الورشات المقدمة للتلاميذ</a>
                        </li>
                        <li className="li hover:scale-105 transition duration-200 ease-in-out text-lg font-medium cursor-pointer list-none ">
                            <a className='bg-transparent ' href='#courses'> الدورات المفتوحة</a>
                        </li>
                        <li className="li hover:scale-105 transition duration-200 ease-in-out text-lg font-medium cursor-pointer list-none text-primary" >
                            المساهمة في تنظيم نشاطات و خرجات أخرى
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Activities;
