import './Workshops.css';
import image1 from '../../assets/images/WorkshopsImages/image-1.png';
import image2 from '../../assets/images/WorkshopsImages/image-2.png';
import image3 from '../../assets/images/WorkshopsImages/image-3.png';
import image4 from '../../assets/images/WorkshopsImages/image-4.png';
import image5 from '../../assets/images/WorkshopsImages/image-5.png';




const Workshops = () => {
    const workshopImages = [
        image1,
        image2,
        image3,
        image4,
        image5,
    ];

    return (
        <div className="p-8 text-center mt-20" id="WorkShops">
           
            <h1 className="text-3xl font-bold mb-8">الورشات</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {workshopImages.map((src, index) => (
                    <div
                        className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                        key={index}
                    >
                        <img
                            src={src}
                            alt={`Workshop ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            {/* Centered Button Positioned Further Below */}
            <div className="flex justify-center mt-12">
                <button
                    type="button"
                    className="text-primary hover:bg-primary font-medium rounded-3xl text-base px-6 py-3 text-center border-solid border-2 border-primary hover:text-white transition"
                >
                    <a href='/WorkShops' className='bg-transparent'>قائمة الورشات</a>
                </button>
            </div>
        </div>
    );
};

export default Workshops;
