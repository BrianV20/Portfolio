import Education from "./Education";

export default function EducationContainer(){

    return (
        <div className="border-2 border-red-600">
            <div>
                <p className="text-2xl">EDUCATION</p>
            </div>
            <Education title='Tecnicatura en programación' entity='UTN' startDate='2022' finishDate='actualidad.' />
            <Education title='Curso de programación full-stack' entity='Digital House' startDate='2023' finishDate='2023' duration="8 meses." />
        </div>
    )
};