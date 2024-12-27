import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Work.css';
import { Helmet } from 'react-helmet';

const Work = () => {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto p-6 relative">
            <Helmet>
                <title>الورشات</title>
            </Helmet>
          
            <button
                onClick={() => navigate('/home')}
                className="absolute top-0 -left-2 md:top-0 md:left-0 bg-primary text-white px-4 py-2 rounded-br-full shadow-lg hover:bg-third transition"
            >
                العودة إلى الصفحة الرئيسية
            </button>

            <h1 className="text-4xl font-bold text-center mb-8 mt-14 text-gray-800">جدول الورشات</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border-none rounded-full">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border-none text-xl px-4 py-6 text-primary text-center">اليوم</th>
                            <th className="border-none text-xl px-4 py-6 text-primary text-center">الوقت</th>
                            <th className="border-none text-xl px-4 py-6 text-primary text-center">الورشة</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:drop-shadow-xl">
                            <td className="border-none bg-table text-gray-800 text-center py-4 px-4">الثلاثاء</td>
                            <td className="border-none bg-table text-gray-800 text-center py-4 px-4">14:30/16:00</td>
                            <td className="border-none bg-table text-gray-800 text-center py-4 px-4">اعلام الي</td>
                        </tr>
                        <tr className="hover:drop-shadow-xl">
                            <td className="border-none bg-fifth text-gray-800 text-center py-4 px-4">الجمعة</td>
                            <td className="border-none bg-fifth text-gray-800 text-center py-4 px-4">15:00/16:30</td>
                            <td className="border-none bg-fifth text-gray-800 text-center py-4 px-4">بيولوجي</td>
                        </tr>
                        <tr className="hover:drop-shadow-xl">
                            <td className="border-none bg-table text-gray-800 text-center py-4 px-4">الثلاثاء</td>
                            <td className="border-none bg-table text-gray-800 text-center py-4 px-4">15:30/17:00</td>
                            <td className="border-none bg-table text-gray-800 text-center py-4 px-4">كيمياء</td>
                        </tr>
                        <tr className="hover:drop-shadow-xl">
                            <td className="border-none bg-fifth text-gray-800 text-center py-4 px-4">السبت</td>
                            <td className="border-none bg-fifth text-gray-800 text-center py-4 px-4">10:00/11:30</td>
                            <td className="border-none bg-fifth text-gray-800 text-center py-4 px-4">ثقافية</td>
                        </tr>
                        <tr className="hover:drop-shadow-xl">
                            <td className="border-none bg-table text-gray-800 text-center py-4 px-4">الجمعة</td>
                            <td className="border-none bg-table text-gray-800 text-center py-4 px-4">15:00/16:30</td>
                            <td className="border-none bg-table text-gray-800 text-center py-4 px-4">الكترونيك</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Work;
