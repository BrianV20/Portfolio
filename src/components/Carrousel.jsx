import { useState } from "react";

export default function Carrousel({ images }) {
    const [currentImg, setCurrentImg] = useState(0);

    const nextImage = () => {
        setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
    };

    const prevImage = () => {
        setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
    };

    return (
        <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
            {images.map((image, i) => (
                <div key={i} className={`transition-opacity duration-500 ease-in-out ${i === currentImg ? 'opacity-100' : 'opacity-0 absolute'}`}>
                    <img src={image} alt={`Slide ${i}`} className="w-full h-auto object-cover object-center md:h-[20rem] lg:min-h-[28rem]"/>
                </div>
            ))}
            <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4">
                <button onClick={prevImage} className="bg-violet-600 text-white p-2 rounded-full hover:bg-violet-800 transition-colors">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button onClick={nextImage} className="bg-violet-600 text-white p-2 rounded-full hover:bg-violet-800 transition-colors">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};