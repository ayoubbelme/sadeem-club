import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    // State to manage the visibility of the menu on smaller screens
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo Section */}
                <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-5xl text-primary whitespace-nowrap font-body">Sadeem</span>
                </a>

                {/* Buttons and Toggle */}
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="text-primary hover:bg-primary hover:text-white font-medium rounded-3xl text-base px-4 py-2 text-center border-solid border-2 border-primary transition"
                    >
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfoTSielykZ4IMgdFYVm0aifKSI9cc8RlIgEGpHuUpMvyUDgQ/viewform"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-transparent"
                        >
                            انضم لنا
                        </a>
                    </button>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
                        aria-controls="navbar-cta"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'
                        }`}
                    id="navbar-cta"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a
                                href="#ContactUs"
                                className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:underline hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary"
                            >
                                اتصل بنا
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Activities"
                                className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:underline hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary"
                            >
                                النشاطات
                            </a>
                        </li>
                        <li>
                            <a
                                href="/home"
                                className="text-lg block py-2 px-3 md:p-0 text-primary bg-text-primary rounded md:bg-transparent md:text-primary hover:underline"
                                aria-current="page"
                            >
                                !من نحن؟
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
