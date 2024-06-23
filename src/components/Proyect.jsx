import Carrousel from "./Carrousel";

export default function Proyect({ title, description, technologies, finishDate, images = [], link, deploy = '' }) {
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
        <div className="px-4 py-6 my-3 bg-white shadow rounded-lg">
            <p className="text-xl font-bold text-gray-800">{title}</p>
            <p className="text-gray-600 mt-2">{description}</p>

            <div className="flex overflow-hidden relative mt-4">
                <Carrousel images={imagePaths} />
            </div>

            <p className="text-gray-600 mt-4">Tecnologías: <span className="text-violet-600">{technologies}.</span></p>

            <div className="flex space-x-4 mt-4">
                <a href={link} className="text-violet-600 hover:text-violet-800 transition-colors">Link</a>
                {deploy !== '' && <a href={deploy} className="text-violet-600 hover:text-violet-800 transition-colors">Deploy</a>}
            </div>
            <p className="text-gray-400 text-sm mt-2">({finishDate})</p>
        </div>
    )
};