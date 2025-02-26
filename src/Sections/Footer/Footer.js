import './Footer.css'
const Footer = () => {
    return (
        <footer className="bg-third text-gray-400 py-8">
            <div className="container mx-auto px-6 text-center space-y-4 ">
                
                
               

                
                <p className="text-gray-500 text-sm bg-third">
                    Designed and Developed by <a className="text-fifth hover:text-primary font-semibold bg-third underline" href="https://www.instagram.com/ay.oub514/" target='blank'>Ayoub Blm</a>
                </p>

               
                <p className="text-gray-500 text-xs mt-2 bg-third">
                    &copy; {new Date().getFullYear()} SADEEM CLUB.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
