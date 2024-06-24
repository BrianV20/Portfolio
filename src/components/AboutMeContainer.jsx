import { useContext } from "react";
import { Link } from "react-scroll";
import { languageContext } from "../Contexts";

export default function AboutMeContainer() {
    const { selectedLanguage, setSelectedLanguage } = useContext(languageContext);

    return (
        <div className="flex flex-col items-center justify-center p-6 lg:flex-row" id="aboutMe">
            <div className="mt-5 mb-3 lg:w-[40%]">
                <img src="./img/epdro.jpg" alt="My picture" className="rounded-full max-h-[18rem] mx-auto border-4 border-violet-500/50 lg:min-h-[30rem] lg:min-w-[20rem] lg:mr-10" />
            </div>
            <div className="text-center">
                <p className="text-lg md:text-xl font-semibold text-gray-800 mb-2 lg:text-4xl text-center">
                    {selectedLanguage == 'spanish' ? 'Hola! Soy ' : `Hi! I'm `}<span className="text-violet-600">Brian Velázquez</span>
                </p>
                <div className="text-sm md:text-lg text-gray-600 lg:text-xl text-start lg:px-10">
                    {selectedLanguage == 'spanish' ? (
                        <p>un junior full stack developer de San Nicolás, Buenos Aires.
                            Actualmente estoy realizando el proyecto final de una tecnicatura en programación, mientras tanto estoy buscando mi primer experiencia laboral en el campo de la programación.</p>
                    ) : (
                        <p>a junior full stack developer.
                            Currently, I'm working on the final proyect of my carreer to become a technician in programming, meanwhile, I'm looking for my first job experience on this field.</p>
                    )}
                </div>
                {/* <a href="#contact" className="mt-4 inline-block bg-violet-600 text-white py-2 px-4 rounded-full hover:bg-violet-700 transition-colors">Contacto</a> */}
                <Link to="contact" smooth={true} duration={500} className="mt-4 inline-block bg-violet-600 text-white py-2 px-4 rounded-full hover:bg-violet-700 transition-colors lg:py-4 lg:px-6 lg:text-2xl cursor-pointer" >{selectedLanguage == 'spanish' ? 'Contacto' : 'Contact'}</Link>
            </div>
        </div>
    );
}

{/* <div className="flex flex-col" id="aboutMe">
<div className="mt-5 mb-3">
    <img src="./img/epdro.jpg" alt="My picture" className="rounded-full max-h-[18rem] mx-auto" />
</div>
<div className="border-2 border-blue-600 text-[1.15rem] roboto-regular">
    <p>Hola! Soy Brian Velázquez, un junior full stack developer de San Nicolás, Buenos Aires.</p>
    <p>Actualmente estoy realizando el proyecto final de una tecnicatura en programación, mientras tanto estoy buscando mi primer experiencia laboral en el campo de la programación.</p>
    <p>Aspiro principalmente a conseguir un trabajo estable y a mejorar como programador.</p>
    <p>Hi! I'm Brian Velázquez, a junior full stack developer.</p>
    <p>Currently, I'm working on the final proyect of my carreer to become a technician in programming, meanwhile, I'm looking for my first job experience on this field.</p>
    <p>The thing I aspire the most is to work with a good group of people on a prestigious company and to become better as a programmer as well.</p>
</div>
</div> */}