import { useContext, useState } from "react";
import { languageContext } from "../Contexts";
import Carrousel from "./Carrousel";

export default function Proyect({ title, description, technologies, finishDate, images = [], link, deploy = '' }) {
    const { selectedLanguage, setSelectedLanguage } = useContext(languageContext);
    // const imagesFolder = '/img';

    // const splitTechnologies = (techs) => {
    //     return techs.split(', ');
    // };

    const getImages = () => {
        let paths = [];
        for (let i = 0; i < images.length; i++) {
            let imgPath = `/img/${images[i]}.jpg`;
            paths.push(imgPath);
        };
        return paths;
    };

    const imagePaths = getImages();

    // const showImg = (index) => {

    // };

    return (
        <div className="px-4 py-6 my-3 bg-white shadow rounded-lg hover:shadow-lg transition-all">
            <p className="text-xl font-bold text-gray-800 lg:text-2xl">{title}</p>
            <p className="text-gray-600 mt-2">{description}</p>

            <div className="flex overflow-hidden relative mt-4">
                <Carrousel images={imagePaths} />
            </div>

            <p className="text-gray-600 mt-4">{selectedLanguage == 'spanish' ? 'Tecnologías: ' : 'Technologies: '}<span className="text-violet-600">{technologies}.</span></p>

            <div className="flex space-x-4 mt-4">
                <a href={link} className="text-blue-400 hover:text-blue-500 transition-colors">Link</a>
                {deploy !== '' && <a href={deploy} className="text-blue-400 hover:text-blue-500 transition-colors">Deploy</a>}
            </div>
            <p className="text-gray-400 text-sm mt-2">({finishDate})</p>
        </div>
    )
};