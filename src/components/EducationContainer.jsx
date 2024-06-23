import Education from "./Education";

export default function EducationContainer() {
    return (
        <div className="border-y-2 mt-8 border-slate-200 rounded-lg py-4 px-4 md:px-6 lg:px-8" id="education">
            <div className="bg-violet-100 rounded-lg px-4 py-2 mb-4">
                <p className="text-xl md:text-2xl text-violet-700 roboto-bold">Educación</p>
            </div>
            <div className="space-y-4">
                <Education title='Tecnicatura en programación' entity='UTN' startDate='2022' finishDate='actualidad' />
                <Education title='Curso de programación full-stack' entity='Digital House' startDate='2023' finishDate='2023' duration="8 meses" />
            </div>
        </div>
    );
}