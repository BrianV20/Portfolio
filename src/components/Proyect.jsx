export default function Proyect({ title, description, technologies, finishDate, images, link }){

    return (
        <div className="bg-cyan-200 px-2">
            <a href={link}><p>{title}</p></a>
            <p>{description}</p>
            <p>({finishDate})</p>
        </div>
    )
};