import React, { useContext } from "react";
import { Link } from "react-scroll";
import { languageContext } from "../Contexts";


export default function NavBar() {
    const { selectedLanguage, setSelectedLanguage } = useContext(languageContext);

    const handleChange = (e) => {
        console.log(e.target.value);
        if(selectedLanguage != e.target.value){
            setSelectedLanguage(e.target.value)
        }
    };

    return (
        <div className="bg-gradient-to-b from-violet-400 to-slate-100 py-2 px-5 flex justify-between items-center gap-x-5 md:py-4 lg:justify-around">
            <p className="text-2xl font-bold text-gray-800 lato-bold hover:text-violet-600 transition-colors">Brian Velázquez</p>
            <div className="flex flex-wrap items-center gap-x-4 lato-regular md:text-xl">
                <Link to="aboutMe" smooth={true} duration={500} className="text-gray-700 hover:text-violet-500 transition-colors cursor-pointer">{selectedLanguage == 'spanish' ? 'Sobre mí' : 'About me'}</Link>
                <Link to="proyects" smooth={true} duration={500} className="text-gray-700 hover:text-violet-500 transition-colors cursor-pointer">{selectedLanguage == 'spanish' ? 'Proyectos' : 'Projects'}</Link>
                <Link to="contact" smooth={true} duration={800} className="text-gray-700 hover:text-violet-500 transition-colors cursor-pointer">{selectedLanguage == 'spanish' ? 'Contacto' : 'Contact'}</Link>
                <div className="flex">
                    <p>Language:</p>
                    <select name="" id="" onChange={handleChange} className="text-gray-700 hover:text-violet-500 focus:ring-violet-500 focus:border-violet-500 transition-colors cursor-pointer ml-1 border border-gray-300 bg-white rounded-md lato-regular md:text-xl">
                        <option value="spanish">Spanish</option>
                        <option value="english">English</option>
                    </select>
                </div>
                {/* {selectedLanguage == 'spanish' ? <p>spanish</p> : <p>nada</p>}
                <button onClick={() => setSelectedLanguage('english')}>sss</button> */}
            </div>
        </div>
    );
}