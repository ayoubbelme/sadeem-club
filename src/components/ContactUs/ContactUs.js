import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className="py-24 px-6 flex flex-col items-center text-center" id="ContactUs">
            <h1 className="text-4xl font-semibold text-gray-800 mb-6">اتصل بنا</h1>
            <p className="text-gray-600 mb-6">
            يسعدنا أن نسمع منك! تواصل معنا عبر وسائل التواصل الاجتماعي أو أرسل لنا بريدًا إلكترونيًا.
            </p>
            <div className="flex space-x-20 md:space-x-20 lg:space-x-36 mt-6 ">
                <a href="https://www.facebook.com/profile.php?id=100089022945764" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:text-blue-600 text-7xl sm:text-9xl md:text-7xl lg:text-9xl transition duration-300 ease-in-out transform hover:scale-110 border-none">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com/sadeemclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:text-pink-600 text-7xl sm:text-6xl md:text-7xl lg:text-9xl transition duration-300 ease-in-out transform hover:scale-110">
                    <FaInstagram />
                </a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXLCPcKMdJGllzfcMbMxMgZzDKzpLjNpDFRlTQZxTrqTPDbQvKQvDbWtjLPDrncnDcfTr" 
                    className="text-primary hover:text-red-600 text-7xl sm:text-6xl md:text-7xl lg:text-9xl transition duration-300 ease-in-out transform hover:scale-110" target='_blank'>
                    
                    <FaEnvelope />
                </a>
            </div>
        </div>
    );
};

export default ContactUs;
