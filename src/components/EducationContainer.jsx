import { useContext, useState } from "react";
import { languageContext } from "../Contexts";
import Education from "./Education";

export default function EducationContainer() {
    const { selectedLanguage, setSelectedLanguage } = useContext(languageContext);

    return (
        <div className="mt-8 rounded-lg py-4 px-4 md:px-6 lg:px-8 lg:mb-12" id="education">
            <div className="bg-violet-100 rounded-lg px-4 py-2 mb-4">
                <p className="text-xl md:text-2xl text-violet-700 roboto-bold lg:text-3xl">{selectedLanguage == 'spanish' ? 'Educación' : 'Education'}</p>
            </div>
            <div className="space-y-4 lg:text-xl">
                <Education title={selectedLanguage == 'spanish' ? 'Tecnicatura en programación' : 'Technician in programming'} entity='UTN' startDate='2022' finishDate={selectedLanguage == 'spanish' ? 'actualidad' : 'today'} />
                <Education title={selectedLanguage == 'spanish' ? 'Curso de programación full-stack' : 'Full-stack programming course'} entity='Digital House' startDate='2023' duration={selectedLanguage == 'spanish' ? '8 meses' : '8 months'} />
            </div>
        </div>
    );
}