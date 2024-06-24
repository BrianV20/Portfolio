import { useContext, useState } from "react";
import { languageContext } from "../Contexts";

export default function Footer() {
    const { selectedLanguage, setSelectedLanguage } = useContext(languageContext);

    return (
        <div className="bg-violet-900 px-4 py-5 text-center text-white lato-regular mt-5">
            <p className="text-lg">2024</p>
            <p className="text-sm md:text-lg">{selectedLanguage == 'spanish' && 'Derechos reservados (?'} Brian Velázquez</p>
        </div>
    );
};