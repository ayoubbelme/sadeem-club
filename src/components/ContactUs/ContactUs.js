import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            type: "spring",
            stiffness: 100,
            damping: 10,
        },
    }),
};

const ContactUs = () => {
    return (
        <motion.div
            id="ContactUs"
            className="py-24 px-6 bg-gradient-to-br flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                اتصل بنا
            </motion.h1>

            <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                يسعدنا أن نسمع منك! تواصل معنا عبر وسائل التواصل الاجتماعي أو أرسل لنا بريدًا إلكترونيًا.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-10 mt-6">
                {[{
                    href: "https://www.facebook.com/profile.php?id=100089022945764",
                    icon: <FaFacebook />,
                    color: "text-blue-600 hover:bg-blue-50",
                    label: "Facebook"
                }, {
                    href: "https://www.instagram.com/sadeemclub",
                    icon: <FaInstagram />,
                    color: "text-pink-500 hover:bg-pink-50",
                    label: "Instagram"
                }, {
                    href: "mailto:sadeemclub@gmail.com",
                    icon: <FaEnvelope />,
                    color: "text-red-500 hover:bg-red-50",
                    label: "Email"
                }].map((item, i) => (
                    <motion.a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className={`w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center text-4xl transition-transform duration-300 hover:scale-110 ${item.color}`}
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={i}
                    >
                        {item.icon}
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};

export default ContactUs;
