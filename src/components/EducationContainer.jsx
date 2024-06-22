import Education from "./Education";

export default function EducationContainer(){

    return (
        <div className="border-y-2 mt-8 border-b-slate-300 border-t-slate-300 rounded-lg py-3">
            <div className="bg-orange-200 rounded-xl px-2 w-fit mb-2">
                <p className="text-2xl roboto-bold">EDUCACIÓN</p>
            </div>
            <div>
                <Education title='Tecnicatura en programación' entity='UTN' startDate='2022' finishDate='actualidad.' />
                <Education title='Curso de programación full-stack' entity='Digital House' startDate='2023' finishDate='2023' duration="8 meses." />
            </div>
        </div>
    )
};